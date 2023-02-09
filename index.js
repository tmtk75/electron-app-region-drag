const electron_1 = require("electron");
electron_1.app.whenReady().then(() => {
  const mainWindow = new electron_1.BrowserWindow({
    titleBarStyle: "customButtonsOnHover",
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  mainWindow.loadURL(`file://${process.cwd()}/index.html`);
});
