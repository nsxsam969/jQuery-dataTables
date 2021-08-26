const path = require('path');
const builder = require('electron-builder');

builder.build({

    projectDir: path.resolve(__dirname),  // 專案路徑 

    win: ['nsis', 'portable'],  // nsis . portable
    config: {
        "appId": "com.andrewdeveloper.electron.jQueryDataTables",
        "productName": "jQuery DataTables", // 應用程式名稱
        "directories": {
            "output": "build"
        },
        "win": {
            "icon": path.resolve(__dirname, 'icons/icon.png'),
        }
    },
})
    .then(
        data => console.log(data),
        err => console.error(err)
    );