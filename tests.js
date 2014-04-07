var Pacet = function (canvasItem, imgItem) {

    var _this = this;

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

    function getColorData(mPos) {
        var imgData = _this.ctx.getImageData(mPos.x, mPos.y, 1, 1).data,
            RGB = {'R': imgData[0], 'G': imgData[1], 'B': imgData[2]},
            colorOutput = document.querySelector('.colorOutput'),
            rgbOutput = document.querySelector('.rgbOutput');

        colorOutput.style.backgroundColor = 'rgb(' + RGB.R + ',' + RGB.G + ',' + RGB.B + ')';
        rgbOutput.value = RGB.R + ',' + RGB.G + ',' + RGB.B;
    }

    this.canvas.addEventListener('mousemove', function (evt) {
        var mousePos = getMousePosition(evt);
        getColorData(mousePos);
    });
};

window.onload = function () {
    var pacet = new Pacet('.pacet_canvas', '.pacet_image');
};
