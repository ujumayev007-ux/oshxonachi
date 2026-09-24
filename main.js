const { app, BrowserWindow } = require('electron');
const path = require('path');

// Serverimizni ishga tushirish uchun server.js ni chaqiramiz
require('./server.js');

function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, 'public/favicon.ico'), // Agar ikonka bo'lsa
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    // Oyna ochilganda to'g'ridan-to'g'ri local serverga ulaymiz
    mainWindow.loadURL('http://localhost:3000/superadmin.html'); // Qaysi sahifa ochilishini xohlasangiz

    // Menyu panelini yashirish (dasturga o'xshash chiqishi uchun)
    mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.stop; // yoki app.quit()
    app.quit();
});
