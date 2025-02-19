var humanPoints = 0;
var pcPoints = 0;
var laps = 3;


const coins=document.getElementById("coin_text")
async function oneLap() {
    baner.innerHTML = "Select three <br> numbers";  
    var results = await humanInitialize();
    var myNums = results[0]; 
    var pcNums = results[1]; 


    baner.innerHTML = "PC is choosing...";
    pcPoints += await pcTurn(myNums.map(cell => Number(cell.textContent)));  

    baner.innerHTML = "Find the acorns!";
    humanPoints += await humanSelect(pcNums);  
    console.log(humanPoints+"   "+pcPoints)
    coins.innerHTML=Number(coins.textContent)+(humanPoints-pcPoints);

    if (laps > 1) {
        baner.innerHTML = "New round starting...";
        await new Promise(resolve => setTimeout(resolve, 1000));  
    }
}



async function startGame() {
    for (let i = 0; i < laps; i++) {  
        await oneLap(); 
    }

    console.log("Game Over");
    console.log("Human Points:", humanPoints);
    console.log("PC Points:", pcPoints);

    await new Promise(resolve => setTimeout(resolve, 2000));//Delay to ensure animations finished

    window.location.href = "Frontend/pages/game_over.html";
}

startGame();