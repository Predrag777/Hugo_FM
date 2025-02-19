const cells = document.querySelectorAll('#table1 .cells');
let logTurn = true;
let counter = 0;
let mySelectedCells = [];

function humanTurn() {
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            if (counter < 3 && !mySelectedCells.includes(cell)) {
                mySelectedCells.push(cell);
                counter++;

                const originalText = cell.textContent;
                cell.dataset.originalText = originalText;

                cell.style.backgroundImage = "url('/home/predrag/Desktop/Hugo_FM/PNG/Asset 3-8.png')";
                cell.style.backgroundSize = "70% 70%";
                cell.style.backgroundRepeat = "no-repeat";
                cell.style.backgroundPosition = "center";
                cell.style.color = "transparent";
                cell.style.backgroundColor="yellow";

                if (counter === 3) {
                    setTimeout(() => {
                        mySelectedCells.forEach(cell => {
                            cell.style.backgroundImage = "none";
                            cell.style.color = "white";
                            cell.style.backgroundColor="green";
                            cell.textContent = cell.dataset.originalText;
                        });
                        logTurn = false;
                        counter = 0;
                        mySelectedCells = [];
                        pcTurn();
                    }, 1000);
                }
            }
        });
    });
}


let pcSelectedCells=[];
function pcTurn() {
    const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
if (logTurn) {
    humanTurn();
}
