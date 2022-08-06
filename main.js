let container = document.querySelector('.container');
let numberOfRowsAndColumns = 16 ;



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

makeTheGrid();