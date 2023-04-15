// Basic definitions
const container = document.querySelector(".container");
const changeGridSizeBtn = document.querySelector("#sizebtn");
const resetBtn = document.querySelector("#reset");
const removeBordersBtn = document.querySelector("#removeBorders");
let numberOfRowsAndColumns = 16;

// Function to create the starting grid
function makeTheGrid() {
  container.innerHTML = ""; // Clear the container
  for (let i = 0; i < numberOfRowsAndColumns; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < numberOfRowsAndColumns; j++) {
      const columnDiv = document.createElement("div");
      columnDiv.classList.add("column");
      rowDiv.appendChild(columnDiv);
    }
    container.appendChild(rowDiv);
  }
  syncBorderWithButton();
}

// Function to change div background color on hover
function changeColor() {
  this.style.backgroundColor = "pink";
}

// Function to change grid size
function changeGridSize() {
  let promptSize = prompt("Enter the size of the grid");
  while (isNaN(promptSize) || promptSize < 1 || promptSize > 100) {
    alert("You must enter a number between 1 and 100");
    promptSize = prompt("Enter the size of the grid");
  }
  numberOfRowsAndColumns = promptSize;
  makeTheGrid();
  container.addEventListener("mousedown", listenToHover);
}

// Function to reset div background color
function resetColor() {
  const gridDivs = document.querySelectorAll(".column");
  gridDivs.forEach((gridDiv) => (gridDiv.style.backgroundColor = "white"));
}

// Function to toggle borders
function removeAddBorders() {
  const gridDivs = document.querySelectorAll(".column");
  if (removeBordersBtn.textContent === "Add borders") {
    gridDivs.forEach((gridDiv) => (gridDiv.style.border = "1px solid black"));
    removeBordersBtn.textContent = "Remove borders";
  } else if (removeBordersBtn.textContent === "Remove borders") {
    gridDivs.forEach((gridDiv) => (gridDiv.style.border = "0"));
    removeBordersBtn.textContent = "Add borders";
  }
}

// Function to sync borders with the button text
function syncBorderWithButton() {
  const gridDivs = document.querySelectorAll(".column");
  if (removeBordersBtn.textContent === "Add borders") {
    gridDivs.forEach((gridDiv) => (gridDiv.style.border = "0"));
  } else if (removeBordersBtn.textContent === "Remove borders") {
    gridDivs.forEach((gridDiv) => (gridDiv.style.border = "1px solid black"));
  }
}

// Function to listen for hover events
function listenToHover(event) {
  event.preventDefault();
  const gridDivs = document.querySelectorAll(".column");
  gridDivs.forEach((gridDiv) =>
    gridDiv.addEventListener("mouseover", changeColor)
  );
  container.addEventListener("mouseup", removeListenToHover);
}

// Function to remove hover effect
function removeListenToHover() {
  const gridDivs = document.querySelectorAll(".column");
  gridDivs.forEach((gridDiv) =>
    gridDiv.removeEventListener("mouseover", changeColor)
  );
}

// Event listeners
makeTheGrid();
container.addEventListener("mousedown", listenToHover);
changeGridSizeBtn.addEventListener("click", changeGridSize);
resetBtn.addEventListener("click", resetColor);
removeBordersBtn.addEventListener("click", removeAddBorders);
