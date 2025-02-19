var baner=document.getElementById("baner");
function humanSelect(pcNums) {
    console.log("PC Numbers in humanSelect: " + pcNums);
    const cells = document.querySelectorAll('#table2 .cells');
    let counter = 0;
    let mySelectedCells = [];
    let points = 0;
    
    baner.innerHTML = "Nadji orah";

    return new Promise(resolve => {
        cells.forEach(cell => {
            cell.addEventListener('click', function handleClick() {
                if (counter < 3 && !mySelectedCells.includes(cell)) {
                    mySelectedCells.push(cell);
                    counter++;

                    if (pcNums.includes(Number(cell.textContent))) {
                        points += 100;  
                        cell.style.backgroundImage = "url('PNG/Asset 3-8.png')";
                    } else {
                        cell.style.backgroundImage = "url('PNG/incorrect.png')";
                    }

                    cell.style.backgroundSize = "70% 70%";
                    cell.style.backgroundRepeat = "no-repeat";
                    cell.style.backgroundPosition = "center";
                    cell.style.color = "transparent";
                    cell.style.backgroundColor = "yellow";

                    if (counter === 3) {
                        setTimeout(() => {
                            mySelectedCells.forEach(cell => {
                                cell.style.backgroundImage = "none";
                                cell.style.color = "white";
                                cell.style.backgroundColor = "rgb(177, 3, 3)";
                            });

                            cells.forEach(cell => cell.removeEventListener('click', handleClick));
                            resolve(points);
                        }, 1000);
                    }
                }
            });
        });
    });
}


function pcTurn(humanNumbers) {
    var counter = 0;
    var positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var points = 0;  
    var pcSelectedCells = [];
    const cells = document.querySelectorAll('#table1 .cells');
    const pcInterval = setInterval(() => {
        if (counter >= 3) {
            clearInterval(pcInterval);
            setTimeout(() => {
                pcSelectedCells.forEach(cell => {
                    cell.style.backgroundImage = "none";
                    cell.style.color = "white";
                    cell.textContent = cell.dataset.originalText;
                    cell.style.backgroundColor = "green";
                });
                logTurn = true;
                counter = 0;
                pcSelectedCells = [];
                humanSelect();  
            }, 1000);
            return;
        }
        let num = Math.floor(Math.random() * positions.length);
        let randomPosition = positions[num];
        let selectedCell = cells[randomPosition - 1];

        if (selectedCell && !pcSelectedCells.includes(selectedCell)) {
            selectedCell.dataset.originalText = selectedCell.textContent;
            pcSelectedCells.push(selectedCell);
            console.log("SS " + selectedCell);
            if (humanNumbers.includes(selectedCell.textContent)) {
                selectedCell.style.backgroundImage = "url('PNG/Asset 2-8.png')";
                points += 100; 
            } else {
                selectedCell.style.backgroundImage = "url('PNG/incorrect.png')";
            }
            selectedCell.style.backgroundSize = "70% 70%";
            selectedCell.style.backgroundRepeat = "no-repeat";
            selectedCell.style.backgroundPosition = "center";
            selectedCell.style.color = "transparent";
            selectedCell.style.backgroundColor = "yellow";

            counter++;
        }
    }, 1000);

    return points;  
}
