document.addEventListener("DOMContentLoaded", function () {
    
    let squirrel = document.getElementById("mySquirrel");
    let tables = document.querySelectorAll(".table .cells");

    tables.forEach(cell => {
        cell.addEventListener("click", function () {
            let rect = cell.getBoundingClientRect();
            let parentRect = document.getElementById("main").getBoundingClientRect();

            let targetX = rect.left - parentRect.left + rect.width/2  - squirrel.clientWidth/2 ;
            let targetY = rect.top - parentRect.top + rect.height/2 - squirrel.clientHeight/2 ;

            squirrel.style.left = `${targetX+50}px`;
            squirrel.style.top = `${targetY+200}px`;
        });
    });
});
