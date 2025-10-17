const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.querySelector("#score");
const timeLeft = document.querySelector("#Time-left");

let timeId = null;
let hitPosition;
let result = 0;
let currentTime = 60;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add("mole");
    hitPosition = randomSquare.id;
    
}

squares.forEach((square) => {
    square.addEventListener("mousedown", () => {
        if(square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition=null;
        }
            
    });
});

function moveMole() {
   timeId = setInterval(randomSquare,500); // 500 = 0.5sec
}

moveMole();

let countDownTimerId= setInterval(countDown,1000) //1000 = 1sec

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if(currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timeId);
        alert("Game Over! You final score is " + result);
    }
}