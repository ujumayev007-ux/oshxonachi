const { app, BrowserWindow } = require('electron');
require('./server.js'); // Serverni bir xil ishga tushiradi

app.whenReady().then(() => {
    const win = new BrowserWindow({ width: 1200, height: 800 });
    win.loadURL('http://localhost:3000/admin.html'); // Admin sahifasi
    win.setMenuBarVisibility(false);
});
