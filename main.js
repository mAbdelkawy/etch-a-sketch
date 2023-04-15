// Get DOM elements
const containerEl = document.querySelector(".container");
const changeSizeBtn = document.querySelector("#changeSizeBtn");
const resetBtn = document.querySelector("#resetBtn");
const toggleBordersBtn = document.querySelector("#toggleBordersBtn");

// Set initial grid size
let gridSize = 16;

// Function to create the grid
function createGrid() {
  containerEl.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");
      rowDiv.appendChild(cellDiv);
    }
    containerEl.appendChild(rowDiv);
  }
  syncBordersWithButton();
}

// Function to change cell background color on hover
function changeColor() {
  this.style.backgroundColor = "pink";
}

// Function to change grid size
function changeGridSize() {
  let newSize = prompt("Enter the new size of the grid (1-100)");
  newSize = parseInt(newSize);
  if (isNaN(newSize) || newSize < 1 || newSize > 100) {
    alert("You must enter a number between 1 and 100");
    return;
  }
  gridSize = newSize;
  createGrid();
  containerEl.addEventListener("mousedown", listenToHover);
}

// Function to reset cell background color
function resetColor() {
  const cellDivs = document.querySelectorAll(".cell");
  cellDivs.forEach((cellDiv) => (cellDiv.style.backgroundColor = "white"));
}

// Function to toggle grid borders
function toggleBorders() {
  const cellDivs = document.querySelectorAll(".cell");
  if (toggleBordersBtn.textContent === "Add Borders") {
    cellDivs.forEach((cellDiv) => (cellDiv.style.border = "1px solid black"));
    toggleBordersBtn.textContent = "Remove Borders";
  } else {
    cellDivs.forEach((cellDiv) => (cellDiv.style.border = "0"));
    toggleBordersBtn.textContent = "Add Borders";
  }
}

// Function to sync border styles with button text
function syncBordersWithButton() {
  const cellDivs = document.querySelectorAll(".cell");
  if (toggleBordersBtn.textContent === "Add Borders") {
    cellDivs.forEach((cellDiv) => (cellDiv.style.border = "0"));
  } else {
    cellDivs.forEach((cellDiv) => (cellDiv.style.border = "1px solid black"));
  }
}

// Function to listen to hover event on cells
function listenToHover(event) {
  event.preventDefault();
  const cellDivs = document.querySelectorAll(".cell");
  cellDivs.forEach((cellDiv) =>
    cellDiv.addEventListener("mouseover", changeColor)
  );
  containerEl.addEventListener("mouseup", removeListenToHover);
}

// Function to remove hover event on cells
function removeListenToHover() {
  const cellDivs = document.querySelectorAll(".cell");
  cellDivs.forEach((cellDiv) =>
    cellDiv.removeEventListener("mouseover", changeColor)
  );
}

// Initial grid creation
createGrid();

// Event listeners
containerEl.addEventListener("mousedown", listenToHover);
changeSizeBtn.addEventListener("click", changeGridSize);
resetBtn.addEventListener("click", resetColor);
toggleBordersBtn.addEventListener("click", toggleBorders);
