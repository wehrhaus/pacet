var Pacet = function (canvasItem, imgItem) {

    var _this = this,
        isTracking = true;

    this.canvas = document.querySelector(canvasItem);
    this.ctx = this.canvas.getContext('2d');
    this.img = document.querySelector(imgItem);

    this.ctx.drawImage(this.img, 0, 0);

    function getMousePosition(evt) {
        var rect = _this.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    function rgbToHex(R,G,B) { // http://www.javascripter.net/faq/rgbtohex.htm
        return toHex(R) + toHex(G) + toHex(B);
    }

    function toHex(n) { // http://www.javascripter.net/faq/rgbtohex.htm
        n = parseInt(n,10);
        if (isNaN(n)) {
            return '00';
        }
        n = Math.max(0,Math.min(n,255));
        return '0123456789abcdef'.charAt((n-n%16)/16) + '0123456789abcdef'.charAt(n%16);
    }


    function getColorData(mPos) {
        if (!isTracking) {
            return false;
        }
        var imgData = _this.ctx.getImageData(mPos.x, mPos.y, 1, 1).data,
            RGB = {'R': imgData[0], 'G': imgData[1], 'B': imgData[2]},
            colorOutput = document.querySelector('.colorOutput'),
            rgbOutput = document.querySelector('.rgbOutput'),
            hexOutput = document.querySelector('.hexOutput');

        colorOutput.style.backgroundColor = 'rgb(' + RGB.R + ',' + RGB.G + ',' + RGB.B + ')';
        rgbOutput.value = RGB.R + ',' + RGB.G + ',' + RGB.B;
        hexOutput.value = '#' + rgbToHex(RGB.R, RGB.G, RGB.B);
    }

    function toggleTracking(bool) {
        isTracking = bool;
    }

    this.canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePosition(evt);
        getColorData(mousePos);
    });

    this.canvas.addEventListener('click', function (evt) {
        return !isTracking ? toggleTracking(true) : toggleTracking(false);
    });
};

window.onload = function () {
    var pacet = new Pacet('.pacet_canvas', '.pacet_image');
};
