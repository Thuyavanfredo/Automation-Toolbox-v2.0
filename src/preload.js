// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer} = require("electron");
const { writeFile, readFile } = require("fs");
const { title } = require("process");

contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    updateEvent:(buttonType)=>{

        // const networkSharePath = '\\catedcnas2.ap.cat.com\PSID-I\Automation analytics';

        // Replace 'file.txt' with the desired file name
        // const fileName = 'process.env.USERNAME+".json';

        // Full path of the file on the network share drive
        // const filePath = path.join(networkSharePath, fileName);

        // const path = "G:/Analytics/"+process.env.USERNAME+".json";
        // const path = "//catedcnas2.ap.cat.com/PSID-I/Analytics/"+process.env.USERNAME+".json";
        const path = "C:/Users/"+process.env.USERNAME+"/Caterpillar/SID- Automation Toolbox Group - General/App data/program files/temp/Do Not Delete/"+process.env.USERNAME+".json";
        let currentDate = new Date();
        let cDay = currentDate.getDate();
        let cMonth = currentDate.getMonth() + 1;
        let cYear = currentDate.getFullYear();
        let cdate = (cDay + "/" + cMonth + "/" + cYear)
        let time = (currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());
    
        readFile(path, (error, data) => {
            if (error) {
                // console.log(error);
                    writeFile(path, JSON.stringify([{
                        userName: process.env.USERNAME,
                        Date: cdate,
                        Time: time,
                        buttonType,
                    }], null, 2), (err) => {
                        if (err) {
                            console.log("Failed to write updated data to file");
                            return;
                        }
                        console.log("Updated file successfully");
                    });
                return;
            }
        })
        readFile(path, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(data)
            
            const parsedData = JSON.parse(data);
            
            // updating name in shipping_address
            parsedData.push({
                userName: process.env.USERNAME,
                Date: cdate,
                Time: time,
                buttonType,
            });
            
            writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
                if (err) {
                    console.log("Failed to write updated data to file");
                    return;
                }
                console.log("Updated file successfully");
            });
        });
    }
})
const API = {
    mainWindow: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
        link: () => ipcRenderer.send("app/link"),
        child: () => ipcRenderer.send("app/child"),
        child1: () => ipcRenderer.send("app/child1"),
        child2: () => ipcRenderer.send("app/child2"),
        prefix: () => ipcRenderer.send("app/prefix"),
        download: () => ipcRenderer.send("app/download")
},
errorWindow: {
    close: () => ipcRenderer.send("app/errorClose"),
    sync: () => ipcRenderer.send("app/sync")
},
}
contextBridge.exposeInMainWorld("app", API);

