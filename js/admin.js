// Render'dagi backend manzilingiz
const SERVER_URL = 'https://oshxonachi.onrender.com';
let socket = null;
let liveOrders = [];

try {
    socket = io(SERVER_URL);

    socket.on('connect', () => {
        console.log("Admin Socket.io muvaffaqiyatli ulandi:", socket.id);
        // Ulanish hosil bo'lganda qizil nuqtani yashilga o'tkazish
        const statusEl = document.getElementById('connection-status');
        if (statusEl) {
            statusEl.innerHTML = '<span style="color: green;">● Ulangan</span>';
        }
    });

    socket.on('disconnect', () => {
        console.log("Admin server bilan ulanish uzildi");
        const statusEl = document.getElementById('connection-status');
        if (statusEl) {
            statusEl.innerHTML = '<span style="color: red;">● Ulanmoqda...</span>';
        }
    });

    // Serverdan boshlang'ich buyurtmalar kelganda
    socket.on('init_orders', (orders) => {
        liveOrders = orders;
        localStorage.setItem('admin_orders', JSON.stringify(orders));
        if (typeof renderOrders === 'function') {
            renderOrders(orders);
        }
    });

    // Buyurtmalar yangilanganda
    socket.on('update_orders', (orders) => {
        liveOrders = orders;
        localStorage.setItem('admin_orders', JSON.stringify(orders));
        if (typeof renderOrders === 'function') {
            renderOrders(orders);
        }
    });

} catch (e) {
    console.log("Admin Socket.io xatoligi:", e);
}

class AdminPanel {
  constructor() {
    this.menu = JSON.parse(localStorage.getItem('admin_menu')) || [];
    this.initListeners();
  }

  updateMenuItem(id, newFields) {
    const item = this.menu.find(m => m.id === id);
    if (item) {
      if (newFields.name !== undefined) item.name = newFields.name;
      if (newFields.internal_price !== undefined) item.internal_price = newFields.internal_price;
      if (newFields.sale_price !== undefined) item.sale_price = newFields.sale_price;
      if (newFields.is_visible !== undefined) item.is_visible = newFields.is_visible;
      localStorage.setItem('admin_menu', JSON.stringify(this.menu));
    }
  }

  toggleVisibility(id) {
    const item = this.menu.find(m => m.id === id);
    if (item) {
      item.is_visible = !item.is_visible;
      localStorage.setItem('admin_menu', JSON.stringify(this.menu));
    }
  }

  updateWarehouseStock(warehouseList, incomingItemName, incomingQty) {
    let existingItem = warehouseList.find(w => w.name.toLowerCase() === incomingItemName.toLowerCase());
    if (existingItem) {
      existingItem.quantity += incomingQty;
    } else {
      warehouseList.push({ name: incomingItemName, quantity: incomingQty });
    }
    return warehouseList;
  }

  changeOrderStatus(orderId, newStatus) {
    // Serverga buyurtma holati o'zgarganini xabar qilish
    if (socket && socket.connected) {
        socket.emit('change_status', { orderId: Number(orderId), status: newStatus });
    }

    let orders = JSON.parse(localStorage.getItem('admin_orders')) || [];
    orders = orders.map(o => {
      if (String(o.id) === String(orderId) || String(o.tableNumber) === String(orderId)) {
        o.status = newStatus;
      }
      return o;
    }
);
    localStorage.setItem('admin_orders', JSON.stringify(orders));
  }

  initListeners() {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('admin_menu_state', JSON.stringify(this.menu));
    });
  }
}

const admin = new AdminPanel();
