// default 16x16 grid, background color white, fill color black//

const grid = document.querySelector('#grid');
let gridSize = 16;

function createGrid(numBox) {
    for (let i=0; i < numBox**2; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.backgroundColor = 'white';
        square.style.width = `${400/numBox}px`;
        square.style.height = `${400/numBox}px`;
        grid.appendChild(square);
    }
}

createGrid(gridSize)

let fillColor = document.getElementById('favcolor').value;

function drawGrid() {
    const squares = Array.from(document.querySelectorAll('.square'));
    for (let i=0; i<squares.length; i++) {
        function fillSquare() {
            squares[i].style.backgroundColor = `${fillColor}`;
        } 
        squares[i].addEventListener('mouseover', fillSquare)}
}

drawGrid();

// grid scale button //
// listen for a click, bring up a pop-up alert to obtain a numerical input from user//
// clear the existing grid, then replace with a grid with new box size //

function deleteGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild)
    }
}

const gridScale = document.querySelector('.grid-size');

function changeGridSize() {
    gridSize = Number(prompt('Enter a number from 1 to 100:', ''));
    if (gridSize < 1 || gridSize > 100) {
        alert("Invalid value. Please try again.")    
    } else {
        deleteGrid();
        createGrid(gridSize)
        drawGrid();
}}

gridScale.addEventListener('click', changeGridSize);

// color picker //
// listen for the change in the value, then update the variable fillColor //

const colorPicker = document.getElementById('favcolor');

colorPicker.addEventListener('input', function(e) {
    fillColor = e.target.value;
    drawGrid();
})

//"go Crazy" button //
//listen for a click, randomly change the fillColor, then upate the variable//

const rainbow = document.querySelector('.go-crazy');

function randomColor() {
    const hexCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let colorHexCode = [];
    for (let i = 0; i <= 5; i++) {
        const randomHex = hexCode[Math.floor(Math.random()*hexCode.length)];
        colorHexCode.push(randomHex);
    }
    fillColor = `#${colorHexCode.join('')}`;
    return fillColor;
}

function drawGridRainbow() {
    const squares = Array.from(document.querySelectorAll('.square'));
    for (let i=0; i<squares.length; i++) {
        function fillSquareRainbow() {
            randomColor();
            squares[i].style.backgroundColor = `${fillColor}`;
        } 
    squares[i].addEventListener('mouseover', fillSquareRainbow)}
}

rainbow.addEventListener('click', drawGridRainbow);

//"Clear" button deletes the existing grid and creates a new grid with current grid scale and fill color//
const clearGrid = document.querySelector('.delete-grid');
clearGrid.addEventListener('click', function() {
    deleteGrid()
    createGrid(gridSize)
    drawGrid()
});
