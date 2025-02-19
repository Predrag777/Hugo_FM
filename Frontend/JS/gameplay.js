var humanPoints = 0;
var pcPoints = 0;
var laps = 1;

async function oneLap() {
    var results = await humanTurn();
    var myNums = results[0]; 
    var pcNums = results[1]; 

    console.log("My Numbers: ", myNums);
    console.log("PC Numbers: ", pcNums);

    pcPoints += await pcTurn(myNums); 

    humanPoints += await humanSelect(pcNums); 

}

async function startGame() {
    for (let i = 0; i < laps; i++) {  
        await oneLap(); 
    }

    console.log("Game Over");
    console.log("Human Points:", humanPoints);
    console.log("PC Points:", pcPoints);

    // Dodatni delay da budemo sigurni da su animacije gotove
    await new Promise(resolve => setTimeout(resolve, 2000));

    window.location.href = "Frontend/pages/game_over.html";
}

startGame();