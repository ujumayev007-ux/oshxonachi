let tablesData = [];
let socket = null;

// Render'dagi backend manzilingiz
const SERVER_URL = 'https://oshxonachi.onrender.com';

try {
    socket = io(SERVER_URL);

    socket.on('connect', () => {
        console.log("Socket.io muvaffaqiyatli ulandi:", socket.id);
    });

    socket.on('disconnect', () => {
        console.log("Server bilan ulanish uzildi");
    });

    socket.on('INIT_STATE', (data) => {
        tablesData = data.tables;
        renderTables();
    });

    socket.on('STATE_UPDATED', (data) => {
        tablesData = data.tables;
        renderTables();
    });

    socket.on('WAITER_CALLED', (msg) => {
        showWaiterNotification(msg.tableNumber);
        playAlertSound();
    });

} catch (e) {
    console.log("Socket.io ulanishda xatolik:", e);
}

function renderTables() {
    const grid = document.getElementById('tables-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    tablesData.forEach(t => {
        grid.innerHTML += `
            <div class="card" style="background: ${t.status === 'band' ? '#ffcdd2' : '#c8e6c9'}; cursor: pointer;" onclick="openTableModal(${t.id})">
                <h4>Stol #${t.id}</h4>
                <p>Holati: ${t.status}</p>
            </div>
        `;
    });
}

/**
 * OFITSIANT "BUYURTMANI YUBORISH" TUGMASINI BOSGANDA ISHLaydigan FUNKSIYA
 * (Buni ofitsiant panelidagi tugma bosiladigan joyga ulab qo'yasiz)
 */
function sendOrderToServer(tableNumber, cartItems) {
    if (!cartItems || cartItems.length === 0) {
        alert("Savat bo'sh!");
        return;
    }

    const orderData = {
        id: Date.now(),
        table: tableNumber,
        items: cartItems,
        status: 'Yangi',
        createdAt: new Date().toLocaleTimeString()
    };

    // 1. Serverga Socket.io orqali real vaqtda yuborish (Admin darhol ko'radi)
    if (socket && socket.connected) {
        socket.emit('new_order', orderData);
        console.log("Buyurtma serverga yuborildi:", orderData);
    } else {
        console.warn("Socket ulanmagan, buyurtma serverga ketmadi!");
    }

    // 2. Mahalliy xotiraga ham zaxira uchun saqlash
    let localOrders = JSON.parse(localStorage.getItem('restaurant_orders')) || [];
    localOrders.push(orderData);
    localStorage.setItem('restaurant_orders', JSON.stringify(localOrders));

    alert("Buyurtma oshxonaga va adminga muvaffaqiyatli yuborildi!");
}

function showWaiterNotification(tableNumber) {
    let container = document.getElementById('waiter-notifications-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'waiter-notifications-container';
        container.style.cssText = "position: fixed; top: 20px; right: 20px; z-index: 9999; max-width: 350px;";
        document.body.appendChild(container);
    }

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const notification = document.createElement('div');
    notification.style.cssText = `
        background: #ff4757; color: white; padding: 15px 20px; margin-bottom: 10px; 
        border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        font-family: Arial, sans-serif; display: flex; justify-content: space-between; align-items: center;
    `;
    notification.innerHTML = `
        <div>
            <strong style="font-size: 18px;">🔔 Diqqat! Stol #${tableNumber}</strong>
            <div style="font-size: 13px; opacity: 0.9; margin-top: 3px;">Ofitsiantni chaqirmoqda! (${timeStr})</div>
        </div>
        <button onclick="this.parentElement.remove()" style="background: white; color: #ff4757; border: none; padding: 6px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-left: 10px;">Ko'rdim</button>
    `;
    container.prepend(notification);
}

function playAlertSound() {
    try {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sundry/2869-preview.mp3');
        audio.play().catch(err => console.log("Ovoz bloklandi:", err));
    } catch (e) {
        console.error("Ovoz chiqarishda xatolik:", e);
    }
}
