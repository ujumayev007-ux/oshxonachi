const { app, BrowserWindow } = require('electron');
require('./server.js');

app.whenReady().then(() => {
    const win = new BrowserWindow({ width: 1200, height: 800 });
    win.loadURL('http://localhost:3000/waiter.html'); // Ofitsiant sahifasi
    win.setMenuBarVisibility(false);
});
