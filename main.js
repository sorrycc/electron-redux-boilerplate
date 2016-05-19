const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 690,
    show: false,
  });
  win.loadURL(`file://${__dirname}/dist/index.html`);
  win.show();
});
