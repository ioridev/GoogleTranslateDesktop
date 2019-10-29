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
    if (process.platform !== 'darwin') {
      app.quit()
    }
})
  
app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })
  
