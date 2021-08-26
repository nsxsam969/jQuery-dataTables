const app =  require('electron').app; // app 是 Main Process 本身
const BrowserWindow = require('electron').BrowserWindow; // 瀏覽器視窗

function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 900,  // 寬度
        height: 640, // 高度

		autoHideMenuBar: true,
    });

    mainWindow.loadFile('index.html'); // 載入 index.html 檔案
}

// 當 Main Process 準備好後 , 建立一個視窗顯示
app.on('ready', () => createWindow());

// 所有 BrowserWindow 關閉後 , 結束 Main Process
app.on('window-all-closed', () =>  app.quit());