var Pacet = function (canvasItem, imgItem) {

    var that = this;

    this.canvas = document.querySelector(canvasItem);
    this.ctx = this.canvas.getContext('2d');
    this.img = document.querySelector(imgItem);

    this.ctx.drawImage(this.img, 0, 0);

    this.getMousePosition = function (evt) {
        var rect = that.canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    };

    this.getColorData = function (mPos) {
        var imgData = that.ctx.getImageData(mPos.x, mPos.y, 1, 1).data,
            RGB = {'R': imgData[0], 'G': imgData[1], 'B': imgData[2]},
            output = document.querySelector('.output');
        console.log(RGB);
        output.style.backgroundColor = 'rgb(' + RGB.R + ',' + RGB.G + ',' + RGB.B + ')';
    };

    this.canvas.addEventListener('mousemove', function (evt) {
        var mousePos = that.getMousePosition(evt);
        that.getColorData(mousePos);
    });
};

window.onload = function () {
    var pacet = new Pacet('.pacet_canvas', '.pacet_image');
};
