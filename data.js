// data.js - Mingchinor Kompleks (Firebase + LocalStorage Unified Store)

const urlParams = new URLSearchParams(window.location.search);
const CAFE_ID = urlParams.get('cafe') || (typeof DEFAULT_CAFE_ID !== 'undefined' ? DEFAULT_CAFE_ID : 'mingchinor');

const DB = {
    cafeId: CAFE_ID,
    tables: [
        { id: 1, name: 'Stol 1', status: 'free' },
        { id: 2, name: 'Stol 2', status: 'free' },
        { id: 3, name: 'Stol 3', status: 'free' },
        { id: 4, name: 'Stol 4', status: 'free' },
        { id: 5, name: 'Stol 5', status: 'free' }
    ],
    categories: [
        { id: 1, name: "Milliy Taomlar" },
        { id: 2, name: "Fast-Food" },
        { id: 3, name: "Ichimliklar" }
    ],
    menuItems: [
        { id: 1, name: "Osh (Choyxona)", price: 30000, categoryId: 1, description: "An'anaviy Toshkent oshi qo'y go'shti bilan" },
        { id: 2, name: "Manti", price: 6000, categoryId: 1, description: "Hoji go'shtli xo'rak manti (1 dona)" },
        { id: 3, name: "Klab-Sendvich", price: 25000, categoryId: 2, description: "Tovuqli maxsus sendvich kartoshka fri bilan" },
        { id: 4, name: "Coca-Cola 1L", price: 12000, categoryId: 3, description: "Sovuq gazli ichimlik" }
    ],
    orders: [],
    waiterCalls: [],

    init() {
        // LocalStorage dan yuklash (Fallback)
        this.loadFromLocal();

        // Firebase ulangan bo'lsa sinash
        if (typeof firebase !== 'undefined' && typeof FIREBASE_CONFIG !== 'undefined' && Object.keys(FIREBASE_CONFIG).length > 0) {
            try {
                if (!firebase.apps.length) {
                    firebase.initializeApp(FIREBASE_CONFIG);
                }
                this.db = firebase.firestore();
                this.initFirebaseListeners();
            } catch (e) {
                console.warn("Firebase ulanishida xatolik, localStorage ishlatilmoqda:", e);
            }
        }

        window.dispatchEvent(new Event('mc:db_ready'));
    },

    loadFromLocal() {
        const prefix = `mc_${this.cafeId}_`;
        ['tables', 'categories', 'menuItems', 'orders', 'waiterCalls'].forEach(key => {
            const data = localStorage.getItem(prefix + key);
            if (data) {
                try { this[key] = JSON.parse(data); } catch(e) {}
            }
        });
    },

    save(key) {
        const prefix = `mc_${this.cafeId}_`;
        localStorage.setItem(prefix + key, JSON.stringify(this[key]));
        
        if (this.db) {
            this.db.collection('cafes').doc(this.cafeId).collection(key).doc('data').set({ items: this[key] })
                .catch(err => console.error("Firebase saqlash xatosi:", err));
        }
        window.dispatchEvent(new Event('mc:data_changed'));
    },

    addOrder(order) {
        order.id = 'ord_' + Date.now();
        order.createdAt = new Date().toISOString();
        order.status = 'new';
        if (!this.orders) this.orders = [];
        this.orders.push(order);
        this.save('orders');
    },

    broadcast(eventName, detail) {
        window.dispatchEvent(new CustomEvent(eventName, { detail }));
    },

    nextId(arr) {
        if (!arr || arr.length === 0) return 1;
        return Math.max(...arr.map(i => i.id || 0)) + 1;
    },

    initFirebaseListeners() {
        ['tables', 'categories', 'menuItems', 'orders', 'waiterCalls'].forEach(key => {
            this.db.collection('cafes').doc(this.cafeId).collection(key).doc('data')
                .onSnapshot(doc => {
                    if (doc.exists && doc.data().items) {
                        this[key] = doc.data().items;
                        window.dispatchEvent(new Event('mc:data_changed'));
                    }
                }, err => {});
        });
    }
};

// Ishga tushirish
DB.init();