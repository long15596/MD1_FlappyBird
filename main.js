let birdImg = new Image();
let bg = new Image();
let pipeUp = new Image();
let pipeDown = new Image();

birdImg.src = 'img/bird.png';
bg.src = 'img/background.png';
pipeUp.src = 'img/pipeUp.png';
pipeDown.src = 'img/pipeDown.png';

let score = 0;
let pipeDistance = 100;
let pipeSpace;
let bird = {
    x : bg.width/5,
    y : bg.height/2
}

let pipe = [];
pipe[0] = {
    x: canvas.width,
    y: 0
}

play();