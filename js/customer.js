// Kengaytirilgan menyu ma'lumotlari (kategoriyalarga bo'lingan holda)
const menuItems = [
    // Osh
    { id: 1, name: "Toshkent oshi (To'y oshi)", price: 35000, category: "osh", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 2, name: "Samarqand oshi", price: 38000, category: "osh", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 3, name: "Buxoro oshi (\"Sochqi oshi\")", price: 37000, category: "osh", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 4, name: "Farg'ona oshi", price: 36000, category: "osh", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },
    { id: 5, name: "Devzira oshi", price: 42000, category: "osh", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },

    // Suyuq ovqatlar
    { id: 6, name: "Qaynatma sho'rva", price: 28000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 7, name: "Mastava", price: 22000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 8, name: "No'xat sho'rva (Mo'xaldak)", price: 26000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 9, name: "Moshxorda", price: 24000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 10, name: "Kalla-pacha", price: 35000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 11, name: "Chuchvara sho'rva", price: 25000, category: "supli", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300" },
    { id: 12, name: "Ko'za sho'rva", price: 32000, category: "supli", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=300" },
    { id: 13, name: "Shirguruch", price: 20000, category: "supli", image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300" },

    // -Quyuq taomlar
    { id: 14, name: "Bifsteks", price: 40000, category: "asosiy", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300" },
    { id: 15, name: "Bistrogonav (Bef-stroganov)", price: 38000, category: "asosiy", image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=300" },
    { id: 16, name: "Jarkor (Jarkoye)", price: 34000, category: "asosiy", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 17, name: "Lag'man (Qovurma lag'man)", price: 36000, category: "asosiy", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 18, name: "Dimlama", price: 32000, category: "asosiy", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 19, name: "Tabaka jo'jasi (S-tabaka)", price: 35000, category: "asosiy", image: "https://images.unsplash.com/photo-1626509809489-44535b43d37a?w=300" },
    { id: 20, name: "Norin (Qozon norin)", price: 38000, category: "asosiy", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },

    // -Hamirli ovqatlar
    { id: 21, name: "Manti (Go'shtli va piyozli)", price: 32000, category: "hamirli", image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=300" },
    { id: 22, name: "Chuchvara (Qaynatilgan yoki qovurilgan)", price: 28000, category: "hamirli", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300" },
    { id: 23, name: "Cho'zma lag'mon", price: 36000, category: "hamirli", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 24, name: "Qovurma lag'mon (Qovurma so'y)", price: 37000, category: "hamirli", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 25, name: "Uyg'ur lag'moni", price: 38000, category: "hamirli", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 26, name: "Norin", price: 38000, category: "hamirli", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 27, name: "Beshbarmoq", price: 45000, category: "hamirli", image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?w=300" },
    { id: 28, name: "Uyg'ur shivit oshi", price: 36000, category: "hamirli", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=300" },

    // Kaboblar
    { id: 29, name: "Qiyma kabob", price: 18000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 30, name: "Qo'y go'shti shashligi (Klassik shashlik)", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 31, name: "Jigar shashligi", price: 20000, category: "kabob", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300" },
    { id: 32, name: "Qozon kabob", price: 38000, category: "kabob", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 33, name: "Tandir kabob", price: 45000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 34, name: "Jiz kabob", price: 40000, category: "kabob", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 35, name: "Norin kabob", price: 39000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 36, name: "Toyloq (Uyg'urcha) kabob", price: 25000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 37, name: "Bedana kabob", price: 30000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 38, name: "Tovuq shashligi (File kabob)", price: 19000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 39, name: "Lula-kabob", price: 21000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 40, name: "Karsak kabob", price: 23000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 41, name: "Qovurma shashlik", price: 24000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 42, name: "Quyruq kabob (Dumba kabob)", price: 25000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 43, name: "Bifshteks kabob", price: 26000, category: "kabob", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=300" },
    { id: 44, name: "Tabaka kabob", price: 35000, category: "kabob", image: "https://images.unsplash.com/photo-1626509809489-44535b43d37a?w=300" },
    { id: 45, name: "Ovoza kabob", price: 24000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 46, name: "Sabzavotli kabob", price: 15000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 47, name: "Qanotcha shashligi (Tovuq qanoti)", price: 20000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 48, name: "Piyozli kabob", price: 16000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 49, name: "Qovurg'a kabob (Ribs)", price: 28000, category: "kabob", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300" },
    { id: 50, name: "Kavkazcha shashlik (Kars)", price: 27000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 51, name: "Baliq kabob", price: 30000, category: "kabob", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=300" },
    { id: 52, name: "Mushroom (Qo'ziqorin) kabob", price: 17000, category: "kabob", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=300" },
    { id: 53, name: "Gilos kabob (Mevali kabob)", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 54, name: "Asalli shashlik", price: 23000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 55, name: "Achchiq (Laza) shashlik", price: 22000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 56, name: "Minora kabob", price: 35000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 57, name: "Kletchatka kabob", price: 18000, category: "kabob", image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?w=300" },
    { id: 58, name: "Jigar-dumba kabob", price: 21000, category: "kabob", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300" },

    // Somsalar
    { id: 59, name: "Tandir somsa", price: 12000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 60, name: "Qatlama (varaqi) somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 61, name: "Ko'k somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300" },
    { id: 62, name: "Qovoqli somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 63, name: "Kartoshkali somsa", price: 8000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 64, name: "G'umma somsa (Qovurma somsa)", price: 9000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 65, name: "Go'shtli-kartoshkali somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 66, name: "Pishloqli somsa", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 67, name: "Tovuqli somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 68, name: "Qiyma somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 69, name: "Moshli somsa", price: 9000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 70, name: "Zig'ir somsa", price: 13000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 71, name: "Asal solingan shirin somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 72, name: "Qora zira (yoki kunjutli) somsa", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 73, name: "Katta to'y somsasi", price: 25000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 74, name: "Piyozli somsa (piyoz-dumba)", price: 9000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 75, name: "Qo'ziqorinli somsa", price: 10000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 76, name: "Uyg'urcha somsa", price: 12000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 77, name: "Jigar somsasi", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 78, name: "Sutli xamirdan tayyorlangan somsa", price: 11000, category: "somsa", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },

    // Fast Food
    { id: 79, name: "Lavash", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 80, name: "Hamburger", price: 28000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 81, name: "Cheeseburger", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 82, name: "Shaurma (Doner)", price: 27000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 83, name: "Hot-dog", price: 18000, category: "fastfood", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300" },
    { id: 84, name: "Kartoshka fri", price: 15000, category: "fastfood", image: "https://images.unsplash.com/photo-1576107232684-1279f3908591?w=300" },
    { id: 85, name: "Pitsa (30 sm / 25 sm / 20 sm)", price: 65000, category: "fastfood", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300" },
    { id: 86, name: "Klab-sendvich", price: 25000, category: "fastfood", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300" },
    { id: 87, name: "Xaggi (Haggi)", price: 29000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 88, name: "Tovuq nuggetslari", price: 22000, category: "fastfood", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300" },
    { id: 89, name: "Tovuq tenderslari (Tenders)", price: 24000, category: "fastfood", image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300" },
    { id: 90, name: "Chikken burger", price: 27000, category: "fastfood", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300" },
    { id: 91, name: "Fransuzcha hot-dog", price: 20000, category: "fastfood", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300" },
    { id: 92, name: "Piyoz halqalari (Onion rings)", price: 16000, category: "fastfood", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=300" },
    { id: 93, name: "Burrito", price: 32000, category: "fastfood", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=300" },
    { id: 94, name: "Taco", price: 30000, category: "fastfood", image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=300" },
    { id: 95, name: "Panini", price: 24000, category: "fastfood", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300" },
    { id: 96, name: "Wok lapshasi", price: 35000, category: "fastfood", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300" },
    { id: 97, name: "Korn-dog", price: 18000, category: "fastfood", image: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300" },
    { id: 98, name: "Pishloqli tayoqchalar (Cheese-sticks)", price: 20000, category: "fastfood", image: "https://images.unsplash.com/photo-1548340795-5d512a4d3396?w=300" }
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
