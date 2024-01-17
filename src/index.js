const { app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const { autoUpdater } = require('electron-updater')
const log = require('electron-log');
const fs = require("fs");

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

fs.mkdir("C:/Automation Toolbox v2.0", function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("New directory successfully created.")
  }
})
log.transports.file.resolvePath = () => path.join("C:/Automation Toolbox v2.0", '/logs/main.log');
log.log("Application version "+ app.getVersion())
log.info('Hello, log');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
// eslint-disable-next-line global-require
if (require('electron-squirrel-startup')) {
  app.quit();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  const specifiedPath = "C:/Users/"+process.env.USERNAME+"/Caterpillar/SID- Automation Toolbox Group - General/App data/program files/temp/Do Not Delete";

  fs.access(specifiedPath, fs.constants.F_OK, (err) => {
  if (err) {
    error();
    // Display a dialog to the user or handle the error in a way that suits your application
  } else {
    createWindow();
  }
});
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
  autoUpdater.checkForUpdatesAndNotify()
})
let errorWindow;
let mainWindow;
function createWindow() {
  // Create the browser window.
    mainWindow = new BrowserWindow({
    width: 887,
    height: 568,
    icon: path.join(__dirname, '../img/Logo.ico'),
    // titleBarStyle: 'hidden',
    // titleBarOverlay: true,
    frame: false,
    // resizable:false,
    // maximizable:false,
    transparent:true,
    backgroundColor: "#00000001",
    // titleBarOverlay: {
    //   color: '#abc1b5',
    //   symbolColor: '#5c8e99',
    //   height: 20
    // },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      // enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  mainWindow.setMenuBarVisibility(false)
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}
function error() {
  // Create the browser window.
    errorWindow = new BrowserWindow({
    width: 450,
    height: 300,
    icon: path.join(__dirname, '../img/cloudsync.png'),
    frame: false,
    transparent:true,
    backgroundColor: "#00000001",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      // enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  // and load the index.html of the app.
  errorWindow.loadFile(path.join(__dirname, 'error.html'));
  errorWindow.setMenuBarVisibility(false)
  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
}
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
    autoUpdater.checkForUpdatesAndNotify()
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
autoUpdater.on("update-available",()=>{
log.info("Update available")
})
autoUpdater.on("checking-for-update",()=>{
  log.info("checking-for-update")
})
  autoUpdater.on("download-progress",(progressTrack)=>{
    log.info("\n\ndownload-progress")
  log.info(progressTrack)
})
autoUpdater.on("update-downloaded",()=>{
  log.info("update-downloaded")
})
autoUpdater.on("update-not-available",()=>{
  log.info("update-not-available")
})
autoUpdater.on("error",(err)=>{
  log.info("Error", err)
})
ipcMain.on("app/close", () => {
  mainWindow.close();
});
ipcMain.on("app/errorClose", () => {
  errorWindow.close();
});
ipcMain.on("app/minimize", () => {
  mainWindow.minimize();
});
ipcMain.on("app/link", () => {
  const { shell } = require('electron');
  const EA = 'https://engineeringautomation.ecorp.cat.com';
  shell.openExternal(EA);
});
ipcMain.on("app/sync", () => {
  const { shell } = require('electron');
  const SY = `https://caterpillar.sharepoint.com/teams/AutomationToolbox-Testing610Group/Shared%20Documents/Forms/AllItems.aspx?FolderCTID=0x0120005F3F1F02262B254FA0F7B19F153B8257&id=%2Fteams%2FAutomationToolbox%2DTesting610Group%2FShared%20Documents%2FGeneral&viewid=ba571bea%2Dc976%2D4105%2D8a26%2D1553ed34e528`;  
  shell.openExternal(SY);
});
ipcMain.on("app/child", () => {
  const { screen } = require('electron')

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize
  let childWindow;
  childWindow = new BrowserWindow ({
    width,
    height,
    icon: path.join(__dirname, '../img/android-chrome-512x512.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      // enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  childWindow.loadFile(path.join(__dirname,'steplist.html'));
  childWindow.setMenuBarVisibility(false);
});
ipcMain.on("app/child1", () => {
  const { screen } = require('electron')

  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize
  let childWindow1;
  childWindow1 = new BrowserWindow ({
    width,
    height,
    icon: path.join(__dirname, '../img/android-chrome-512x512.png'),
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      // enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  childWindow1.loadFile(path.join(__dirname,'steplistD&A.html'));
  childWindow1.setMenuBarVisibility(false);
});
ipcMain.on("app/jt", () => {
    var child = require('child_process').execFile;
    var executablePath = "./resources/JT/JTPrep.exe";
    
    child(executablePath, function(err, data) {
        if(err){
           console.error(err);
           return;
        }
})
});
ipcMain.on("app/prefix", () => {
  var child = require('child_process').execFile;
  var executablePath = path.join(__dirname,'Effectivity Macro 2.07.exe');
  
  child(executablePath, function(err, data) {
      if(err){
         console.error(err);
         return;
      }
})
});
ipcMain.on("app/download", () => {
  const { shell } = require('electron');
  const fs = require("fs");

  const sourcePath = "./resources/excel/ResearchsheetTemplate_Final.xlsm"; // Adjust the path and filename as needed
  const destPath = path.join(app.getPath('downloads'), 'ResearchsheetTemplate_Final.xlsm'); // Adjust the filename as needed
  fs.copyFile(sourcePath, destPath, (err) => {
    if (err) {
      console.log('copy-error', err.message);
    } else {
      console.log('copy-success', destPath);
    }
  });
  shell.openPath(destPath); // Open the file
});






