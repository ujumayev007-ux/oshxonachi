let ws = new WebSocket(SERVER_URL);
let globalData = {};

ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if(msg.type === 'INIT_STATE' || msg.type === 'STATE_UPDATED') {
        globalData = msg.data;
        renderAdminOrders();
        renderWarehouse();
    }
};

function renderAdminOrders() {
    const container = document.getElementById('admin-orders');
    if(!container) return;
    container.innerHTML = '';
    globalData.orders.forEach(o => {
        let itemsHtml = o.items.map(i => `<li>${i.name} x ${i.quantity}</li>`).join('');
        container.innerHTML += `
            <div class="card">
                <h4>Stol #${o.tableId}</h4>
                <ul>${itemsHtml}</ul>
                <p>Status: <b>${o.status}</b></p>
                <button onclick="updateStatus(${o.id}, 'Tayyorlanyapti')">Tayyorlanyapti</button>
                <button class="status-ready" onclick="updateStatus(${o.id}, 'Tayyor')">Tayyor</button>
            </div>
        `;
    });
}

function updateStatus(orderId, status) {
    ws.send(JSON.stringify({ type: 'UPDATE_ORDER_STATUS', orderId, status }));
}

function renderWarehouse() {
    const wDiv = document.getElementById('warehouse-list');
    if(!wDiv) return;
    wDiv.innerHTML = '<ul>';
    for(let [item, qty] of Object.entries(globalData.warehouse)) {
        wDiv.innerHTML += `<li>${item}: <b>${qty}</b> g/ml</li>`;
    }
    wDiv.innerHTML += '</ul>';
}
