async function humanTurn() {
    return new Promise((resolve) => {
        const cells = document.querySelectorAll('#table1 .cells');
        let counter = 0;
        let mySelectedCells = [];
        var myNums = [];
        let pcNums = [];  

        baner.innerHTML = "Select three <br> numbers"; 
        
        cells.forEach(cell => {
            cell.addEventListener('click', () => {
                if (counter < 3 && !mySelectedCells.includes(cell)) {
                    mySelectedCells.push(cell);
                    myNums.push(cell.textContent);
                    counter++;

                    cell.style.backgroundImage = "url('PNG/Asset 3-8.png')";
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
                                cell.style.backgroundColor = "green";
                            });

                            pcNums = pcInitialize(); 
                            resolve([mySelectedCells, pcNums]); 
                        }, 1000);
                    }
                }
            });
        });
    });
}

function pcInitialize() {
    const positions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var pcNumbers = [];
    for (let i = 0; i < 3; i++) {
        let randomPosition = positions[Math.floor(Math.random() * positions.length)];
        if (!pcNumbers.includes(randomPosition))
            pcNumbers.push(randomPosition);
        else
            i -= 1;
    }

    console.log("PC Numbers: ", pcNumbers);
    return pcNumbers;
}
