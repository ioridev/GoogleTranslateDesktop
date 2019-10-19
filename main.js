const {app, BrowserWindow} = require('electron')

let mainWindow

var URL = "https://translate.google.com/"

app.on("ready", function () {
    
        
  mainWindow = new BrowserWindow({
    width: 800, height: 600
  });
        mainWindow.loadURL(URL)
        
      
    
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
  
