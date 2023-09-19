const CLOSE_ERROR = document.getElementById("errorClose");
const INSTALL = document.getElementById("installLink");

INSTALL.addEventListener("click", sync);
CLOSE_ERROR.addEventListener("click", error_Close);

function error_Close () {
    app.errorWindow.close();
}
function sync () {
    app.errorWindow.sync();
}