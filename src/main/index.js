import { app, BrowserWindow ,Menu } from 'electron'
const os = require('os')


/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`


function createWindow () {

  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    useContentSize: true,
    width: 1000,
    minWidth:1000,
    minHeight:600,
    icon: 'static/imgs/bitbug_favicon.ico',
    show:false,  
    // transparent: true
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.on('ready-to-show', function () {
    mainWindow.show() 
  })
  
}

app.on('ready', ()=>{
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu) // Setting up the menu section
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

//menu
let template = [
  {
    label: 'File',
    submenu: [{
        label: 'Quit',
        accelerator: '',
        click: function () {
            app.quit()
        }
    }]
},
  {
      label: 'Edit ',
      submenu: [{
          label: 'Copy ',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy'
      }, {
          label: 'Paste ',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste'
      },
      {
        label: 'shear',
        accelerator: 'CmdOrCtrl+X',
        role: 'cut'
      },
      {
        label: 'All election',
        accelerator: 'CmdOrCtrl+A',
        role: 'selectall'
      },
      {
        label: 'Switching Full Screen',
        accelerator: (function () {
          if (process.platform === 'darwin') {
            return 'Ctrl+Command+F'
          } else {
            return 'F11'
          }
        })(),
        click: function (item, focusedWindow) {
          if (focusedWindow) {
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
          }
        }
      }, ]
  },
  {
    label: 'Version ',
    submenu: [{
        label: 'v 1.0 ',
        accelerator: 'v 1.0',
        
    },
    {
      label: 'Automatic Receiving Quote Gifts ',
      accelerator: 'Automatic Receiving Quote Gifts',
      
  },
   ]
},
  
]

app.commandLine.appendSwitch('ignore-certificate-errors')
/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */
