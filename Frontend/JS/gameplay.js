var humanPoints = 0;
var pcPoints = 0;
var laps = 4;

async function oneLap() {
    var results = await humanTurn(); 
    var myNums = results[0];
    var pcNums = results[1];

    console.log("MyNums:", myNums);
    console.log("PC nums:", pcNums);

    pcTurn(myNums); 
    humanSelect(pcNums);

    results = [];
    myNums = [];
    pcNums = [];
}

async function startGame() {
    for (let i = 0; i < laps; i++) {
        console.log(`Lap ${i + 1} started!`);
        await oneLap(); 
    }

    console.log("Game Over");
    console.log("Human Points:", humanPoints);
    console.log("PC Points:", pcPoints);
}

startGame(); 
