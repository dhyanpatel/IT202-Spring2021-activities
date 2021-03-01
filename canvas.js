let circles = [];
let radius = 50;
let context;
let canvas;
document.addEventListener("DOMContentLoaded", function () {
    canvas = document.getElementById("html-canvas");
    circles = [];
    radius = 50;
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    context = canvas.getContext("2d");

    for (let i = 0; i < 20; i++) {
        let x = radius + (Math.random() * (canvas.width - (2 * radius)));
        let y = radius + (Math.random() * (canvas.height - (2 * radius)));
        let colour = randomColour();
        let direction = Math.random() * 2.0 * Math.PI;
        circles.push({x: x, y: y, colour: colour, direction: direction});
        draw();
    }
}, false);

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    circles.forEach( (circle) => {
        circle.x = circle.x + Math.cos(circle.direction);
        circle.y = circle.y + Math.sin(circle.direction);
        drawCircle(circle.x, circle.y, radius, 5, circle.color, circle.color);
        bounce(circle)
    });
    requestAnimationFrame(draw);
}

function drawCircle(x, y, radius, fill_color) {
    context.beginPath();
    context.arc(x, y, radius, 0, 2 * Math.PI);
    context.fillStyle = fill_color;
    context.closePath();
    context.fill();
    context.stroke();
}

function randomColour(){
    let chars = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += chars[Math.floor(Math.random() * 16)];
    }
}

function bounce(circle){
    if (((circle.x - radius) < 0) || ((circle.y - radius) < 0) || ((circle.x + radius) > canvas.width) || ((circle.y + radius) > canvas.height)) {
        circle.direction += (Math.PI / 2);
    }
    if (circle.direction > (2 * Math.PI)) {
        circle.direction -= (2 * Math.PI);
    }
}


