async function humanInitialize() {//Human initialize the board. Select three field for the acorns
    return new Promise((resolve) => {
        const cells = document.querySelectorAll('#table1 .cells');
        let counter = 0;
        let mySelectedCells = [];
        let myNums = [];
        let pcNums = [];

        cells.forEach(cell => {//list all cells
            cell.addEventListener('click', () => {//applied event listener on all cells
                if (counter < 3 && !mySelectedCells.includes(cell)) {
                    mySelectedCells.push(cell);//Save your selected cells
                    myNums.push(cell.textContent); 
                    counter++;
                    
                    //Style for the selected cell
                    cell.style.backgroundImage = "url('PNG/Asset 3-8.png')";
                    cell.style.backgroundSize = "70% 70%";
                    cell.style.backgroundRepeat = "no-repeat";
                    cell.style.backgroundPosition = "center";
                    cell.style.color = "transparent";
                    cell.style.backgroundColor = "yellow";

                    if (counter === 3) {
                        setTimeout(() => {//Wait 1 seconds to roll back to previous style
                            mySelectedCells.forEach(cell => {
                                cell.style.backgroundImage = "none";
                                cell.style.color = "white";
                                cell.style.backgroundColor = "green";
                            });

                            pcNums = pcInitialize(); //Run pc initialization

                            resolve([mySelectedCells, pcNums]); 
                        }, 1000);
                    }
                }
            });
        });
    });
}

function pcInitialize() {//PC initialize its board
    const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var pcNumbers = [];
    for (let i = 0; i < 3; i++) {
        let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        if (!pcNumbers.includes(randomPosition))
            pcNumbers.push(randomPosition);
        else
            i -= 1;
    }

    return pcNumbers;
}
