let ws = new WebSocket(SERVER_URL);
let tablesData = [];

ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if(msg.type === 'INIT_STATE' || msg.type === 'STATE_UPDATED') {
        tablesData = msg.data.tables;
        renderTables();
    } else if(msg.type === 'WAITER_CALLED') {
        alert(`🔔 DIQQAT! Stol #${msg.tableNumber} ofitsantni chaqirmoqda!`);
    }
};

function renderTables() {
    const grid = document.getElementById('tables-grid');
    if(!grid) return;
    grid.innerHTML = '';
    tablesData.forEach(t => {
        grid.innerHTML += `
            <div class="card" style="background: ${t.status === 'band' ? '#ffcdd2' : '#c8e6c9'};">
                <h4>Stol #${t.id}</h4>
                <p>Holati: ${t.status}</p>
            </div>
        `;
    });
}
