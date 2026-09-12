// Boshlang'ich menyu ma'lumotlari (rasmlari va narxlari bilan)
const menuItems = [
    { id: 1, name: "Mol burda kabob", price: 45000, category: "asosiy", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 2, name: "Osh (Plov)", price: 30000, category: "asosiy", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 3, name: "Mastava", price: 20000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 4, name: "Shashromat", price: 25000, category: "asosiy", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 5, name: "Coca-Cola (1L)", price: 12000, category: "suv", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300" }
];

// Savatcha va holatni saqlash (F5 qilinganda o'chib ketmaydi)
let cart = JSON.parse(localStorage.getItem('customer_cart')) || {};

// Sahifa yuklanganda menyuni va stollarni chiqarish
window.onload = function() {
    renderMenu();
    updateCartUI();
    renderTables();
};

function renderMenu() {
    const container = document.getElementById('menu-container');
    if (!container) return;
    
    container.innerHTML = '';
    menuItems.forEach(item => {
        let count = cart[item.id] ? cart[item.id].qty : 0;
        container.innerHTML += `
            <div class="card" style="display: flex; flex-direction: column; justify-content: space-between; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 150px; object-fit: cover;">
                <div style="padding: 15px;">
                    <h4 style="margin: 0 0 10px 0;">${item.name}</h4>
                    <p style="color: #666; margin: 0 0 15px 0;">Narxi: ${item.price} so'm</p>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <button onclick="changeQty(${item.id}, -1)" style="background: #f44336; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">-</button>
                        <span id="qty-${item.id}" style="font-weight: bold; font-size: 16px;">${count}</span>
                        <button onclick="changeQty(${item.id}, 1)" style="background: #4caf50; color: white; border: none; padding: 5px 12px; border-radius: 5px; cursor: pointer; font-size: 16px;">+</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function changeQty(id, delta) {
    if (!cart[id]) {
        let item = menuItems.find(i => i.id === id);
        cart[id] = { ...item, qty: 0 };
    }
    
    cart[id].qty += delta;
    if (cart[id].qty <= 0) {
        delete cart[id];
    }
    
    localStorage.setItem('customer_cart', JSON.stringify(cart));
    renderMenu();
    updateCartUI();
}

function updateCartUI() {
    let totalCount = 0;
    let totalPrice = 0;
    
    for (let id in cart) {
        totalCount += cart[id].qty;
        totalPrice += cart[id].qty * cart[id].price;
    }
    
    document.getElementById('cart-count').innerText = totalCount;
    document.getElementById('cart-total').innerText = totalPrice;
    document.getElementById('modal-cart-total').innerText = totalPrice;
}

function openCartModal() {
    let listContainer = document.getElementById('cart-items-list');
    listContainer.innerHTML = '';
    
    let isEmpty = true;
    for (let id in cart) {
        isEmpty = false;
        listContainer.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                <span>${cart[id].name} (${cart[id].qty} ta)</span>
                <span><b>${cart[id].qty * cart[id].price} so'm</b></span>
            </div>
        `;
    }
    
    if (isEmpty) {
        listContainer.innerHTML = '<p style="text-align:center; color:#777;">Savatchangiz bo\'sh</p>';
    }
    
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

function openWaiterModal() {
    document.getElementById('waiter-modal').style.display = 'flex';
}

function closeWaiterModal() {
    document.getElementById('waiter-modal').style.display = 'none';
}

function renderTables() {
    const tablesList = document.getElementById('tables-list');
    if (!tablesList) return;
    
    tablesList.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
        tablesList.innerHTML += `
            <div class="table-btn" onclick="callWaiter(${i})">
                <span style="font-size: 24px;">🪑</span>
                <span>Stol #${i}</span>
            </div>
        `;
    }
}

function callWaiter(tableNum) {
    alert(`Stol #${tableNum} uchun ofitsant chaqirildi! Signal yuborildi.`);
    closeWaiterModal();
}

function toggleNameInput() {
    let type = document.getElementById('review-type').value;
    let nameInput = document.getElementById('reviewer-name');
    nameInput.style.display = type === 'named' ? 'block' : 'none';
}

function submitReview() {
    alert("Fikr-mulohazangiz qabul qilindi. Rahmat!");
    document.getElementById('review-text').value = '';
}
