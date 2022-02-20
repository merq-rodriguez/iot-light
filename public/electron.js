const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ 
    show: false, 
    width: 400, 
    height: 440, 
    frame: false,
    transparent: true,
    // alwaysOnTop: true,
  });

  mainWindow.removeMenu();

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.loadURL(
    isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`
    );

  mainWindow.on("closed", () => (mainWindow = null));

  mainWindow.setMenuBarVisibility(false)
  // mainWindow.webContents.openDevTools();
}

app.commandLine.appendSwitch('enable-transparent-visuals');
app.on('ready', () => setTimeout(createWindow, 500));

/* app.on("ready", createWindow); */

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});