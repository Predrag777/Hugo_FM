var humanPoints = 0;
var pcPoints = 0;
var laps = 3;


const coins=document.getElementById("coin_text")
async function oneLap() {//One lap is for the one turn
    baner.innerHTML = "Hide your three<br>acorns";  
    var results = await humanInitialize();//Wait till the initialization (for both PC and human player) 
    var myNums = results[0]; //Retrieve human player numbers
    var pcNums = results[1]; // Retrive pc player numbers


    baner.innerHTML = "PC is choosing...";//Change banner text
    pcPoints += await pcTurn(myNums.map(cell => Number(cell.textContent)));  //Wait till PC finished guessing where human player hide his acorns

    baner.innerHTML = "Find the acorns!";// Message for the banner, which means, human player could start with guessing ther PC hide its acorns
    humanPoints += await humanSelect(pcNums);  //Same as for the PC
    coins.innerHTML=Number(coins.textContent)+(humanPoints-pcPoints);

    if (laps > 1) {
        baner.innerHTML = "New round starting...";
        await new Promise(resolve => setTimeout(resolve, 1000));  //Wait one second
    }
}



async function startGame() {//Main function for the gameplay
    for (let i = 0; i < laps; i++) {  
        await oneLap(); 
    }

    await new Promise(resolve => setTimeout(resolve, 2000));//Delay to ensure animations finished

    window.location.href = "Frontend/pages/game_over.html";
}

startGame();