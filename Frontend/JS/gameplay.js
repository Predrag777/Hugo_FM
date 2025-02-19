var humanPoints = 0;
var pcPoints = 0;
var laps = 2;

async function oneLap() {
    var results = await humanTurn();
    var myNums = results[0];
    var pcNums = results[1];

    console.log("MyNums:", myNums);
    console.log("PC nums:", pcNums);

    pcPoints += pcTurn(myNums);  
    humanPoints += await humanSelect(pcNums);  
    console.log("Curr PC Points: " + pcPoints);
    console.log("Curr Human Points: " + humanPoints);

    results = [];
    myNums = [];
    pcNums = [];
}

async function startGame() {
    for (let i = 0; i < laps; i++) {  
        await oneLap();
    }
    console.log("Game Over");
    console.log("Human Points:", humanPoints);
    console.log("PC Points:", pcPoints);

    window.location.href = "Frontend/pages/game_over.html";
}

startGame(); 

