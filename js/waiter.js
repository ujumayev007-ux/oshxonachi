// WebSocket orqali serverga ulanish (SERVER_URL oldindan e'lon qilingan bo'lishi kerak, masalan config.js da)
let ws = new WebSocket(SERVER_URL);
let tablesData = [];

ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    
    if (msg.type === 'INIT_STATE' || msg.type === 'STATE_UPDATED') {
        tablesData = msg.data.tables;
        renderTables();
    } 
    else if (msg.type === 'WAITER_CALLED') {
        // 1. Ekranga chiroyli qilib xabarnoma chiqarish
        showWaiterNotification(msg.tableNumber);
        
        // 2. Ovozli signal chalish
        playAlertSound();
    }
};

function renderTables() {
    const grid = document.getElementById('tables-grid');
    if (!grid) return;
    
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

// Chiroyli bildirishnoma chiqarish funksiyasi
function showWaiterNotification(tableNumber) {
    let container = document.getElementById('waiter-notifications-container');
    
    // Agar konteyner bo'lmasa, uni o'zi yaratib sahifaga qo'shadi
    if (!container) {
        container = document.createElement('div');
        container.id = 'waiter-notifications-container';
        container.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 9999; max-width: 350px;";
        document.body.appendChild(container);
    }

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: #ff4757; 
        color: white; 
        padding: 15px 20px; 
        margin-bottom: 10px; 
        border-radius: 8px; 
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif;
        display: flex;
        justify-content: space-between;
        align-items: center;
        animation: slideIn 0.3s ease;
    `;
    
    notification.innerHTML = `
        <div>
            <strong style="font-size: 18px;">🔔 Diqqat! Stol #${tableNumber}</strong>
            <div style="font-size: 13px; opacity: 0.9; margin-top: 3px;">Ofitsantni chaqirmoqda! (${timeStr})</div>
        </div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #ff4757; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-left: 10px;">Ko'rdim</button>
    `;

    container.prepend(notification);
}

// Ovozli signal funksiyasi (Brauzer bloklamasligi uchun xavfsizroq usul)
function playAlertSound() {
    try {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sundry/2869-preview.mp3');
        audio.play().catch(err => {
            console.log("Brauzer avtomatik tovushni blokladi (sahifani bir marta bosish kerak):", err);
        });
    } catch (e) {
        console.error("Ovoz chiqarishda xatolik:", e);
    }
}
