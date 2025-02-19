var c = 0;
var c_picking=0;

var c_picking2=0;

var animArr = [
    "agentSquirrel/squirrel1.png", 
    "agentSquirrel/squirrel2.png", 
    "agentSquirrel/squirrel3.png",
    "agentSquirrel/squirrel4.png", 
    "agentSquirrel/squirrel5.png", 
    "agentSquirrel/squirrel6.png", 
    "agentSquirrel/squirrel7.png"
];

var animArrPut = [
    "agentSquirrel/squirrelAcorn4.png", 
    "agentSquirrel/squirrelAcorn5.png", 
    "agentSquirrel/squirrelAcorn6.png",
];

var animArrPick=[
    "agentSquirrel/squirrelAcorn4.png", 
    "agentSquirrel/squirrelAcorn5.png", 
    "agentSquirrel/squirrelAcorn6.png",
]

document.addEventListener("DOMContentLoaded", function () {
    let squirrel = document.getElementById("mySquirrel");
    let tables = document.querySelectorAll(".table .cells");

    tables.forEach(cell => {
        squirrel.style.zIndex= 1000;
        cell.addEventListener("click", function () {
            let rect = cell.getBoundingClientRect();
            let parentRect = document.getElementById("main").getBoundingClientRect();
            
            console.log("SS:  "+parentRect.left+"  "+parentRect.right)

            let targetX = rect.left - parentRect.left + rect.width / 2 - squirrel.clientWidth / 2 + 50;
            let targetY = rect.top - parentRect.top + rect.height / 2 - squirrel.clientHeight / 2 + 200;


            moveSquirrel(squirrel, targetX, targetY);
        });
    });
});

function moveSquirrel(squirrel, targetX, targetY) {
    let startX = squirrel.offsetLeft;
    let startY = squirrel.offsetTop;
    let deltaX = targetX - startX;
    let deltaY = targetY - startY;
    let duration = 800;
    let startTime = null;

    if (targetX < startX) {
        squirrel.style.transform = "scaleX(1)";  
    } else {
        squirrel.style.transform = "scaleX(-1)"; 
    }

    function animateSquirrel(timestamp) {
        if (!startTime) startTime = timestamp;
        let progress = (timestamp - startTime) / duration;
        if (progress > 1) progress = 1;

        let newX = startX + deltaX * progress;
        let newY = startY + deltaY * progress;

        squirrel.style.left = `${newX}px`;
        squirrel.style.top = `${newY}px`;

        if (progress < 1) {
            requestAnimationFrame(animateSquirrel);
        } else {
            putAcorn(squirrel, animArrPick);
        }
    }

    let animInterval = setInterval(() => {
        squirrel.style.backgroundImage = `url(${animArr[c]})`;
        c = (c + 1) % animArr.length;
    }, 100);

    requestAnimationFrame(animateSquirrel);

    setTimeout(() => {
        clearInterval(animInterval);
    }, duration);
}

function putAcorn(squirrel, arr) {
    c_picking = 0;

    const pickingInterval = setInterval(() => {
        if (c_picking < animArrPut.length) {
            squirrel.style.backgroundImage = `url(${arr[c_picking]})`;
            c_picking++;
        } else {

            squirrel.style.backgroundImage="url('agentSquirrel/squirrel1.png')"
            clearInterval(pickingInterval);
        }
    }, 300);
}

function pickAcorn(squirrel){
    c_picking2=0

    const pickingInterval = setInterval(() => {
        if (c_picking < animArrPut.length) {
            squirrel.style.backgroundImage = `url(${animArrPut[c_picking]})`;
            c_picking++;
        } else {

            squirrel.style.backgroundImage="url('agentSquirrel/squirrel1.png')"
            clearInterval(pickingInterval);
        }
    }, 300);
}