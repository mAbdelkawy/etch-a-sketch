
// Basic definitions
let container = document.querySelector('.container');
let ChangeGridSize = document.querySelector('#sizebtn');
let reset = document.querySelector('#reset');
let removeBorders = document.querySelector('#removeBorders');
let numberOfRowsAndColumns = 16 ;



// Make the function that will create the starting grid
function makeTheGrid(){

    // create the row div and the class row
    for (let i = 0 ; i< numberOfRowsAndColumns ; i++) {
        let rowDiv = document.createElement('div');
        rowDiv.classList.add('row');

        // create the column div and add the class column
        for (let j = 0 ; j< numberOfRowsAndColumns ; j++) {
            let columnDiv = document.createElement('div');
            columnDiv.classList.add('column');

            // put every column in the row
            rowDiv.appendChild(columnDiv);
        }

        // put every row in the container
        container.appendChild(rowDiv);
    }    
    syncBorderWithButton();
}

// Make the function that will change divs background color on hover to pink.
function changeColor(){
    this.style.backgroundColor = "pink";
}

// Make a function that changes grid size.
function changeGridSize(){

    // Take the input from the user
    let promptSize = prompt('Enter the size of the grid');

    // Make sure its a number and its between 1 and 100
    while (isNaN(promptSize) || promptSize < 1 || promptSize > 100) {
        alert("you must enter a number between 1 and 100");
        promptSize = prompt('Enter the size of the grid');
    }

    // put the user number as the number of rows and columns
    numberOfRowsAndColumns = promptSize ;

    // Remove the empty grid
    container.innerHTML = "";

    // Make the new grid
    makeTheGrid();

    // Run the function that change the background color on hover

    container.addEventListener('mousedown', listenToHover);
}

// Make a function that removes the background color 
function resetColor(){
    let gridDivs = document.querySelectorAll('.column');
    gridDivs.forEach(gridDiv => gridDiv.style.backgroundColor = "white");
}




// make a functions that toggles the borders 
function removeAddBorders(){

    let gridDivs = document.querySelectorAll('.column');

    // If the button says add borders then add borders and change the text to remove borders
    if (removeBorders.textContent === "Add borders"){

        gridDivs.forEach(gridDiv => gridDiv.style.border = '1px solid black');
        removeBorders.textContent = "Remove borders";
        return;
    }

    // if the button says remove borders then remove borders and change it to add borders
    if (removeBorders.textContent === "Remove borders" ){
        gridDivs.forEach(gridDiv => gridDiv.style.border = 0);
        removeBorders.textContent = "Add borders";
    }

    
}



// Make sure the border is synced with what the button says
function syncBorderWithButton(){
    let gridDivs = document.querySelectorAll('.column');

    // If the button will add border make sure there is no border
    if (removeBorders.textContent === "Add borders"){
        gridDivs.forEach(gridDiv => gridDiv.style.border = 0);
    }
    // if the button will remove border make sure there is border 
    if (removeBorders.textContent === "Remove borders" ){
        gridDivs.forEach(gridDiv => gridDiv.style.border = '1px solid black');
    }

}

// changes the div background color when you hover over it
function listenToHover(event){
    event.preventDefault();
    let gridDivs = document.querySelectorAll('.column');
    gridDivs.forEach(gridDiv => gridDiv.addEventListener('mouseover' , changeColor));
    container.addEventListener('mouseup', removeListenToHover);

}

// Remove the effect of changing the background color
function removeListenToHover(){
    let gridDivs = document.querySelectorAll('.column');
    gridDivs.forEach(gridDiv => gridDiv.removeEventListener('mouseover' , changeColor));
}



// make the initial grid
makeTheGrid();

let gridDivs = document.querySelectorAll('.column');
container.addEventListener('mousedown', listenToHover);
ChangeGridSize.addEventListener('click', changeGridSize);
reset.addEventListener('click', resetColor );
removeBorders.addEventListener('click', removeAddBorders);


