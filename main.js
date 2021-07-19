// select cvs
const cvs = document.getElementById("bird");
const ctx = cvs.getContext("2d");

// game vars and consts
let frames = 0;

// load sprite image
const sprite = new Image();
sprite.src = "img/sprite.png";

// draw
function draw() {
    ctx.fillStyle = "#70c5ce";
    ctx.fillRect(0, 0, cvs.width, cvs.height);
}

// update
function update() {

}

// loop
function loop() {
    update();
    draw();
    frames++;

    requestAnimationFrame(loop);
}

loop();