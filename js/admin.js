// Admin panelining asosiy holati va boshqaruvi
class AdminPanel {
  constructor() {
    this.menu = menuDatabase;
    this.initListeners();
  }

  // 1. Menyu nomini, ichki va sotish narxini, ombor qoldig'ini o'zgartirish
  updateMenuItem(id, newFields) {
    const item = this.menu.find(m => m.id === id);
    if (item) {
      if (newFields.name !== undefined) item.name = newFields.name;
      if (newFields.internal_price !== undefined) item.internal_price = newFields.internal_price;
      if (newFields.sale_price !== undefined) item.sale_price = newFields.sale_price;
      if (newFields.is_visible !== undefined) item.is_visible = newFields.is_visible;
      console.log(`Mahsulot yangilandi: ${item.name}`);
    }
  }

  // 2. Ofitsant panelida ko'rinish yoki ko'rinmasligini o'zgartirish (active/hidden)
  toggleVisibility(id) {
    const item = this.menu.find(m => m.id === id);
    if (item) {
      item.is_visible = !item.is_visible;
      console.log(`${item.name} ofitsant uchun holati: ${item.is_visible ? 'Ko\'rinmoqda' : 'Yashiringan'}`);
    }
  }

  // 3. Omborga yangi tovar qo'shish yoki mavjudini qidirib ustiga qo'shish
  updateWarehouseStock(warehouseList, incomingItemName, incomingQty) {
    let existingItem = warehouseList.find(w => w.name.toLowerCase() === incomingItemName.toLowerCase());
    if (existingItem) {
      existingItem.quantity += incomingQty;
    } else {
      warehouseList.push({ name: incomingItemName, quantity: incomingQty });
    }
    return warehouseList;
  }

  // 4. Ofitsant buyurtmasi kelganda statuslar bilan ishlash
  renderAdminOrders(orders) {
    const container = document.getElementById('admin-orders');
    if (!container) return;

    container.innerHTML = orders.map(order => `
      <div class="order-card" style="background: #ffffff; border: 1px solid #b3d7ff; padding: 15px; margin-bottom: 10px; border-radius: 8px;">
        <p><b>Stol #${order.tableNumber}</b> | Ofitsant: ${order.waiterName}</p>
        <p>Status: <span style="font-weight: bold; color: ${order.status === 'tayyor' ? '#0288d1' : '#333'}">${order.status.toUpperCase()}</span></p>
        <div style="margin-top: 10px;">
          <button onclick="admin.changeOrderStatus(${order.id}, 'qabul_qilindi')">Qabul qildim</button>
          <button onclick="admin.changeOrderStatus(${order.id}, 'tayyorlanyapti')">Tayyorlanyapti</button>
          <button onclick="admin.changeOrderStatus(${order.id}, 'tayyor')" style="background-color: #0288d1; color: white;">Tayyor</button>
        </div>
      </div>
    `).join('');
  }

  changeOrderStatus(orderId, newStatus) {
    // Socket.io orqali ofitsant va serverga yuborish logikasi
    console.log(`Buyurtma #${orderId} statusi o'zgardi: ${newStatus}`);
  }

  initListeners() {
    // Sahifa F5 qilinganda yoki yangilanganda holatni saqlab qolish
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('admin_menu_state', JSON.stringify(this.menu));
    });
  }
}

const admin = new AdminPanel();
