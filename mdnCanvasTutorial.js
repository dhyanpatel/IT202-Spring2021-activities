let context;
let canvas;
document.addEventListener("DOMContentLoaded", () => {
    canvas = document.getElementById("mdn-canvas");
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
    context = canvas.getContext("2d")
    draw();
}, false)

function drawRectShadow(posX, posY, height, width) {
    context.shadowColor = 'yellow'
    context.shadowBlur = 20
    context.beginPath()
    context.rect(posX, posY, width, height)
    context.fillStyle = '#03a1fc'
    context.closePath()
    context.fill()
    context.stroke()
}

function drawFilledCircle(posX, posY, radius) {
    context.shadowBlur = 0;
    context.beginPath()
    context.arc(posX, posY, radius, 0, 2 * Math.PI)
    context.fillStyle = 'red'
    context.closePath()
    context.fill()
    context.stroke()
}

function drawImg(posX, posY) {
    let image = new Image()
    image.src = 'mdn.jpg'
    context.drawImage(image, posX, posY);
}

function nameStroke() {
    context.font = "40px Roboto"
    context.strokeStyle = '#ffffff'
    context.strokeText('Dhyan Patel', 500, 500)
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    drawRectShadow(5, 10, 200, 200)
    drawFilledCircle(55, 300, 50)
    drawImg(500, 100)
    nameStroke()
    requestAnimationFrame(draw)
}
