const MINUS = document.getElementById("minimize");
const CLOSE_APP = document.getElementById("close-app");
const LINK = document.getElementById("link");
const CHILD = document.getElementById("child");
const CHILD1 = document.getElementById("child1");
const JT = document.getElementById("jt");
const PREFIX = document.getElementById("prefix");
const EX = document.getElementById("downloadButton");

MINUS.addEventListener("click", minimize);
CLOSE_APP.addEventListener("click", close_app);
LINK.addEventListener("click", ea);
CHILD.addEventListener("click", cw);
CHILD1.addEventListener("click", cw1);
JT.addEventListener("click", jtprep);
PREFIX.addEventListener("click", prefix);
EX.addEventListener("click", download);

function ea () {
    app.mainWindow.link();
}
function jtprep () {
    app.mainWindow.jt();
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
function close_app () {
    app.mainWindow.close();
}
function minimize () {
    app.mainWindow.minimize();
}
function download () {
    app.mainWindow.download();
}
