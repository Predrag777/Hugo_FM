var baner=document.getElementById("baner");
function humanSelect(pcNums) {
    const cells = document.querySelectorAll('#table2 .cells');//Id = table2 is PC's table.
    let counter = 0;
    let mySelectedCells = [];
    let points = 0;
    

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
    return new Promise((resolve) => {
        let counter = 0;
        let positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let points = 0;
        let pcSelectedCells = [];

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
                    resolve(points);
                }, 1000);
                return;
            }

            let num = Math.floor(Math.random() * positions.length);
            let randomPosition = positions[num];
            let selectedCell = cells[randomPosition - 1];

            if (selectedCell && !pcSelectedCells.includes(selectedCell)) {
                selectedCell.dataset.originalText = selectedCell.textContent;
                pcSelectedCells.push(selectedCell);

                if (humanNumbers.includes(Number(selectedCell.textContent))) {
                    selectedCell.style.backgroundImage = "url('PNG/Asset 2-8.png')";
                    points += 100;
                    console.log("Found: " + points);
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
    });
}
