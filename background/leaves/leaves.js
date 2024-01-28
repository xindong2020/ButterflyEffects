var stop, staticx;
var img = new Image();
img.src = "data:image/png;base64,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"
function Sakura(x, y, s, r, fn) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.r = r;
    this.fn = fn;
}
Sakura.prototype.draw = function (cxt) {
    cxt.save();
    var xc = 30 * this.s / 5;
    cxt.translate(this.x, this.y);
    cxt.rotate(this.r);
    cxt.drawImage(img, 0, 0, 30 * this.s, 30 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () {
    this.x = this.fn.x(this.x, this.y);
    this.y = this.fn.y(this.y, this.y);
    this.r = this.fn.r(this.r);
    if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
        this.r = getRandom('fnr');
        if (Math.random() > 0.4) {
            this.x = getRandom('x');
            this.y = 0;
            this.s = getRandom('s');
            this.r = getRandom('r');
        } else {
            this.x = window.innerWidth;
            this.y = getRandom('y');
            this.s = getRandom('s');
            this.r = getRandom('r');
        }
    }
}
SakuraList = function () {
    this.list = [];
}
SakuraList.prototype.push = function (sakura) {
    this.list.push(sakura);
}
SakuraList.prototype.update = function () {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].update();
    }
}
SakuraList.prototype.draw = function (cxt) {
    for (var i = 0, len = this.list.length; i < len; i++) {
        this.list[i].draw(cxt);
    }
}
SakuraList.prototype.get = function (i) {
    return this.list[i];
}
SakuraList.prototype.size = function () {
    return this.list.length;
}

function getRandom(option) {
    var ret, random;
    switch (option) {
        case 'x':
            ret = Math.random() * window.innerWidth;
            break;
        case 'y':
            ret = Math.random() * window.innerHeight;
            break;
        case 's':
            ret = Math.random();
            break;
        case 'r':
            ret = Math.random() * 4;
            break;
        case 'fnx':
            random = -0.5 + Math.random() * 1;
            ret = function (x, y) {
                return x + 0.5 * random - 1.7;
            };
            break;
        case 'fny':
            random = 1.5 + Math.random() * 0.7
            ret = function (x, y) {
                return y + random;
            };
            break;
        case 'fnr':
            random = Math.random() * 0.03;
            ret = function (r) {
                return r + random;
            };
            break;
    }
    return ret;
}

function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    var canvas = document.createElement('canvas'),
        cxt;
    staticx = true;
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
    canvas.setAttribute('id', 'canvas_sakura');
    document.getElementsByTagName('body')[0].appendChild(canvas);
    cxt = canvas.getContext('2d');
    var sakuraList = new SakuraList();
    for (var i = 0; i < 50; i++) {
        var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
        randomX = getRandom('x');
        randomY = getRandom('y');
        randomR = getRandom('r');
        randomS = getRandom('s');
        randomFnx = getRandom('fnx');
        randomFny = getRandom('fny');
        randomFnR = getRandom('fnr');
        sakura = new Sakura(randomX, randomY, randomS, randomR, {
            x: randomFnx,
            y: randomFny,
            r: randomFnR
        });
        sakura.draw(cxt);
        sakuraList.push(sakura);
    }
    stop = requestAnimationFrame(function () {
        cxt.clearRect(0, 0, canvas.width, canvas.height);
        sakuraList.update();
        sakuraList.draw(cxt);
        stop = requestAnimationFrame(arguments.callee);
    })
}
window.onresize = function () {
    var canvasSnow = document.getElementById('canvas_snow');
}
img.onload = function () {
    startSakura();
}

function stopp() {
    if (staticx) {
        var child = document.getElementById("canvas_sakura");
        child.parentNode.removeChild(child);
        window.cancelAnimationFrame(stop);
        staticx = false;
    } else {
        startSakura();
    }
}
