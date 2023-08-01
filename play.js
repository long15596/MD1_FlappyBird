let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
function play() {
    ctx.drawImage(bg, 0 , 0);
    ctx.drawImage(birdImg, bird.x, bird.y);
    for (let i = 0; i < pipe.length; i++) {
        pipeSpace = pipeUp.height + pipeDistance;
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y );
        ctx.drawImage(pipeDown, pipe[i].x, pipe[i].y + pipeSpace);
        pipe[i].x -= 3;

        if (pipe[i].x === canvas.width/2) {
            pipe.push ({
                x: canvas.width,
                y: Math.floor(Math.random() * pipeUp.height) - pipeUp.height
            })
        }
        if (pipe[i].x === 0) {
            pipe.splice(0 , 1);
        }
        if (pipe[i].x === bird.x) {
            score++;
        }
        if (bird.y + birdImg.height === canvas.height || bird.x + birdImg.width >= pipe[i].x && bird.x <= pipe[i].x + pipeUp.width)  {
            location.reload();
        } else if (bird.y <= pipe[i].y + pipeUp.height || bird.y + birdImg.height >= pipe[i].y + pipeSpace) {
            location.reload();
        }
    }

    document.getElementById('score').innerHTML  = "Score: " + score;
    bird.y += 2;
    requestAnimationFrame(play);
}
document.addEventListener("keydown",function (){
    bird.y -= 60;
})

