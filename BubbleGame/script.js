function makeBubble() {
    let clutter = "";
    for (let i = 1; i < 60; i++) {
        const rand = Math.floor(Math.random() * 20 + 1);
        clutter += `<div class="bubble">${rand}</div>`;
    }
    document.querySelector("#pbottom").innerHTML = clutter;
}

let timer = 60;
function runtimer() {
    const int = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(int);
            document.querySelector("#pbottom").innerHTML=`<div id="ending"><h1 id="heading">Game Over:</h1><div id="endscore">Your Score is ${score}</div></div>`;
            score=0;
            hitrn=0;
        }
    }, 1000);
}

let score = 0;
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

let hitrn=0;
function gethit() {
    hitrn = Math.floor(Math.random() * 20 + 1);
    document.querySelector("#hit").textContent = hitrn;
}

document.querySelector("#pbottom").addEventListener("click", function (details) {
    const clicknumber = parseInt(details.target.textContent);
    if (clicknumber === hitrn) {
        increaseScore();
        makeBubble();
        gethit();
    }
});

gethit();
runtimer();
makeBubble();
