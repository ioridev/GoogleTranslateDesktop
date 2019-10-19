const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let win
let mainWindow = null;



app.on("ready", function () {
    
        // mainWindowを作成（windowの大きさや、Kioskモードにするかどうかなどもここで定義できる）
        mainWindow = new BrowserWindow({ width: 600, height: 600 });
        // Electronに表示するhtmlを絶対パスで指定（相対パスだと動かない）
        mainWindow.loadURL('file://' + __dirname + '/index.html');
    

        //このウインドウが閉じられたときの処理
        win.on('closed', () => {
            win = null
        })
    
});

app.on('window-all-closed', () => {
    app.quit()
  })

app.on('window-all-closed', () => {
    // macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
    // アプリケーションとそのメニューバーは有効なままにするのが一般的。
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
  
app.on('activate', () => {
    // macOSでは、ユーザがドックアイコンをクリックしたとき、
    // そのアプリのウインドウが無かったら再作成するのが一般的。
    if (win === null) {
      createWindow()
    }
  })
  
