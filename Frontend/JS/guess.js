function humanSelect(){

}



//"rgb(177, 3, 3)";


function pcTurn(humanNumbers) {
    var counter=0;
    var positions=[1,2,3,4,5,6,7,8,9];
    var pcSelectedCells=[];
    const cells = document.querySelectorAll('#table1 .cells');
    console.log("PC's turn");

    const pcInterval = setInterval(() => {
        if (counter >= 3) {
            clearInterval(pcInterval); 
            setTimeout(() => {
                pcSelectedCells.forEach(cell => {
                    cell.style.backgroundImage = "none";
                    cell.style.color = "white";
                    cell.textContent = cell.dataset.originalText;
                    cell.style.backgroundColor="green";
                });
                logTurn = true;
                counter = 0;
                pcSelectedCells = [];
                humanTurn(); 
            }, 1000); 
            return;
        }
        let num=Math.floor(Math.random() * positions.length)
        let randomPosition = positions[num];
        let selectedCell = cells[randomPosition - 1]; 

        if (selectedCell && !pcSelectedCells.includes(selectedCell)) {
            selectedCell.dataset.originalText = selectedCell.textContent; 
            pcSelectedCells.push(selectedCell); 
            console.log("SS "+selectedCell);
            if(humanNumbers.includes(selectedCell))
                selectedCell.style.backgroundImage = "url('/home/predrag/Desktop/Hugo_FM/PNG/Asset 2-8.png')";
            else{
                selectedCell.style.backgroundImage = "url('/home/predrag/Desktop/Hugo_FM/PNG/incorrect.png')";
            }
            selectedCell.style.backgroundSize = "70% 70%";
            selectedCell.style.backgroundRepeat = "no-repeat";
            selectedCell.style.backgroundPosition = "center";
            selectedCell.style.color = "transparent"; 
            selectedCell.style.backgroundColor="yellow";


            counter++; 

        }
    }, 1000); 
}
