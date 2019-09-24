(() => {

    const electron = require("electron");
    const remote = electron.remote;

    const browserWindow = remote.getCurrentWindow();
    window.reproduce = browserWindow.reproduce;

})();
