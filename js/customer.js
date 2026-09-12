let ws = new WebSocket(SERVER_URL);
let menuData = [];
let cart = JSON.parse(localStorage.getItem('customer_cart')) || {};

ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if(msg.type === 'INIT_STATE' || msg.type === 'STATE_UPDATED') {
        menuData = msg.data.menu;
        renderMenu();
        renderTablesList(msg.data.tables);
    }
};

function renderMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    container.innerHTML = '';
    menuData.forEach(item => {
        if(!item.active) return;
        let qty = cart[item.id] ? cart[item.id].qty : 0;
        container.innerHTML += `
            <div class="card">
                <h4>${item.name}</h4>
                <p>Narxi: ${item.price} so'm</p>
                <div style="display: flex; gap: 10px; align-items: center;">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span id="qty-${item.id}">${qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
            </div>
        `;
    });
    updateCartUI();
}

function changeQty(id, delta) {
    if(!cart[id]) {
        const item = menuData.find(m => m.id === id);
        cart[id] = { ...item, qty: 0 };
    }
    cart[id].qty += delta;
    if(cart[id].qty <= 0) delete cart[id];
    localStorage.setItem('customer_cart', JSON.stringify(cart));
    renderMenu();
}

function updateCartUI() {
    let totalCount = 0;
    let totalPrice = 0;
    Object.values(cart).forEach(i => {
        totalCount += i.qty;
        totalPrice += i.qty * i.price;
    });
    if(document.getElementById('cart-count')) document.getElementById('cart-count').innerText = totalCount;
    if(document.getElementById('cart-total')) document.getElementById('cart-total').innerText = totalPrice;
}

function openWaiterModal() { document.getElementById('waiter-modal').style.display = 'block'; }
function closeWaiterModal() { document.getElementById('waiter-modal').style.display = 'none'; }

function renderTablesList(tables) {
    const list = document.getElementById('tables-list');
    if(!list) return;
    list.innerHTML = '';
    tables.forEach(t => {
        list.innerHTML += `<button onclick="callWaiterForTable(${t.id})">Stol #${t.id}</button>`;
    });
}

function callWaiterForTable(tableId) {
    ws.send(JSON.stringify({ type: 'CALL_WAITER', tableNumber: tableId }));
    alert(`Stol #${tableId} uchun ofitsant chaqirildi!`);
    closeWaiterModal();
}

function toggleNameInput() {
    const type = document.getElementById('review-type').value;
    document.getElementById('reviewer-name').style.display = type === 'named' ? 'block' : 'none';
}

function submitReview() {
    const type = document.getElementById('review-type').value;
    const name = type === 'named' ? document.getElementById('reviewer-name').value : 'Anonim';
    const text = document.getElementById('review-text').value;
    if(!text) { alert('Fikr matnini kiriting!'); return; }
    ws.send(JSON.stringify({ type: 'SUBMIT_REVIEW', review: { name, text } }));
    alert('Fikr-mulohazangiz uchun rahmat!');
    document.getElementById('review-text').value = '';
}

function submitOrder() {
    const items = Object.values(cart);
    if(items.length === 0) { alert('Savatchangiz boʻsh!'); return; }
    let tableId = prompt('Stol raqamingizni kiriting (1-12):', '1');
    if(!tableId) return;

    const orderData = {
        id: Date.now(),
        tableId: parseInt(tableId),
        guests: 2,
        items: items.map(i => ({ name: i.name, quantity: i.qty })),
        status: 'Qabul qilindi'
    };

    ws.send(JSON.stringify({ type: 'NEW_ORDER', orderData }));
    alert('Buyurtmangiz yuborildi!');
    cart = {};
    localStorage.removeItem('customer_cart');
    renderMenu();
}
