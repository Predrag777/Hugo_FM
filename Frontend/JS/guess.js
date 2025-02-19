function pcTurn() {
    
    const cells = document.querySelectorAll('#table2 .cells');
    console.log("PC's turn");

    const pcInterval = setInterval(() => {
        if (counter >= 3) {
            clearInterval(pcInterval); 
            setTimeout(() => {
                pcSelectedCells.forEach(cell => {
                    cell.style.backgroundImage = "none";
                    cell.style.color = "white";
                    cell.textContent = cell.dataset.originalText;
                    cell.style.backgroundColor="rgb(177, 3, 3)";
                });
                logTurn = true;
                counter = 0;
                pcSelectedCells = [];
                humanTurn(); 
            }, 1000); 
            return;
        }

        let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        let selectedCell = cells[randomPosition - 1]; 

        if (selectedCell && !pcSelectedCells.includes(selectedCell)) {
            selectedCell.dataset.originalText = selectedCell.textContent; 
            pcSelectedCells.push(selectedCell); 
            selectedCell.style.backgroundImage = "url('/home/predrag/Desktop/Hugo_FM/PNG/Asset 2-8.png')";
            selectedCell.style.backgroundSize = "70% 70%";
            selectedCell.style.backgroundRepeat = "no-repeat";
            selectedCell.style.backgroundPosition = "center";
            selectedCell.style.color = "transparent"; 
            selectedCell.style.backgroundColor="yellow";


            counter++; 

            console.log(randomPosition + "   " + counter);
        }
    }, 1000); 
}
