const MINUS = document.getElementById("minimize");
const CLOSE_APP = document.getElementById("close-app");
const LINK = document.getElementById("link");
const CHILD = document.getElementById("child");
const CHILD1 = document.getElementById("child1");
const CHILD2 = document.getElementById("child2");
const PREFIX = document.getElementById("prefix");
const EX = document.getElementById("downloadButton");

MINUS.addEventListener("click", minimize);
CLOSE_APP.addEventListener("click", close_app);
LINK.addEventListener("click", ea);
CHILD.addEventListener("click", cw);
CHILD1.addEventListener("click", cw1);
CHILD2.addEventListener("click", cw2);
PREFIX.addEventListener("click", prefix);
EX.addEventListener("click", download);

function ea () {
    app.mainWindow.link();
}
function prefix () {
    app.mainWindow.prefix();
}
function cw () {
    app.mainWindow.child();
}
function cw1 () {
    app.mainWindow.child1();
}
function cw2 () {
    app.mainWindow.child2();
}
function close_app () {
    app.mainWindow.close();
}
function minimize () {
    app.mainWindow.minimize();
}
function download () {
    app.mainWindow.download();
}
