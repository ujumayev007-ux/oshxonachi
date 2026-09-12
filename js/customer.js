// Kengaytirilgan menyu ma'lumotlari (milliy taomlar, kaboblar, somsalar va fast-food)
const menuItems = [
    // Asosiy taomlar & Oshlar
    { id: 1, name: "Toshkent oshi (To'y oshi)", price: 35000, category: "asosiy", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 2, name: "Samarqand oshi", price: 38000, category: "asosiy", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 3, name: "Farg'ona oshi", price: 36000, category: "asosiy", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
    { id: 4, name: "Qovurma lag'mon", price: 36000, category: "asosiy", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 5, name: "Manti (4 dona)", price: 32000, category: "asosiy", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300" },
    
    // Suyuq ovqatlar (Sho'rvalar)
    { id: 6, name: "Qaynatma sho'rva", price: 28000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 7, name: "Mastava", price: 22000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 8, name: "Chuchvara sho'rva", price: 25000, category: "supli", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300" },

    // Kaboblar
    { id: 9, name: "Qo'y go'shti shashligi", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 10, name: "Qiyma kabob", price: 18000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 11, name: "Jigar shashligi", price: 20000, category: "kabob", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300" },

    // Somsalar
    { id: 12, name: "Tandir somsa", price: 12000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 13, name: "Qatlama (varaqi) somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 14, name: "Ko'k somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },

    // Fast-food va Ichimliklar
    { id: 15, name: "Lavash (Standart)", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 16, name: "Gamburger", price: 28000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 17, name: "Kartoshka fri", price: 15000, category: "fastfood", image: "https://images.unsplash.com/photo-1576107232684-1279f3908591?w=300" },
    { id: 18, name: "Coca-Cola (1L)", price: 12000, category: "suv", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300" }
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
                    <h4 style="margin: 0 0 10px 0; font-size: 16px;">${item.name}</h4>
                    <p style="color: #d32f2f; font-weight: bold; margin: 0 0 15px 0;">${item.price} so'm</p>
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
    let modalTotal = document.getElementById('modal-cart-total');
    if (modalTotal) modalTotal.innerText = totalPrice;
}

function openCartModal() {
    let listContainer = document.getElementById('cart-items-list');
    if (!listContainer) return;
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
    if (nameInput) nameInput.style.display = type === 'named' ? 'block' : 'none';
}

function submitReview() {
    alert("Fikr-mulohazangiz qabul qilindi. Rahmat!");
    let reviewText = document.getElementById('review-text');
    if (reviewText) reviewText.value = '';
}
