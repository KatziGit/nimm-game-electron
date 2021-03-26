const path = require('path');
const {app, BrowserWindow} = require('electron');

function createWindow () {
	let win = new BrowserWindow({width: 1920, height: 1080});

	// Production
	win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
	// Development
	//win.loadURL('http://localhost:3000/');
}
app.on('ready', createWindow);