let container = document.querySelector('.container');
let numberOfRowsAndColumns = 16 ;
let button = document.querySelector('#sizebtn');
let reset = document.querySelector('#reset');




function makeTheGrid(){
    for (let i = 0 ; i< numberOfRowsAndColumns ; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        for (let j = 0 ; j< numberOfRowsAndColumns ; j++) {
            let columnDiv = document.createElement('div');
            columnDiv.classList.add('column');

            rowDiv.appendChild(columnDiv);
        }

        container.appendChild(rowDiv);
    }
    
}
function changeColor(){
    this.style.backgroundColor = "pink";
}
function changeGridSize(){
    let promptSize = prompt('Enter the size of the grid');
    while (isNaN(promptSize) || promptSize < 1 || promptSize > 100) {
        alert("you must enter a number between 1 and 100");
        promptSize = prompt('Enter the size of the grid');
    }

    numberOfRowsAndColumns = promptSize ;
    container.innerHTML = "";
    makeTheGrid();
    let gridDivs = document.querySelectorAll('.column');
    gridDivs.forEach(gridDiv => gridDiv.addEventListener('mouseover' , changeColor));

}
function resetColor(){
    let gridDivs = document.querySelectorAll('.column');
    gridDivs.forEach(gridDiv => gridDiv.style.backgroundColor = "white");
}



makeTheGrid();

let gridDivs = document.querySelectorAll('.column');
gridDivs.forEach(gridDiv => gridDiv.addEventListener('mouseover' , changeColor));
button.addEventListener('click', changeGridSize);
reset.addEventListener('click', resetColor )


