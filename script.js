const mainBody = document.body;
var color = "black";
const sizeOfScreen = screen.width;
/* Initial Screen */

const holder = document.createElement("div");
holder.classList.add("holder");
mainBody.appendChild(holder);

/* Header */
const header = document.createElement("h1");
header.classList.add("header");
header.innerHTML = "Etch-a-Sketch!"

/* Selection Bar */
const selectionBar = document.createElement("div");
selectionBar.classList.add("selectionBar");

/* Color Selection*/
const select = document.createElement("select");
select.classList.add("dropDown");
select.addEventListener("change", () => changeColor(select.value))

const blackOption = document.createElement("option");
blackOption.style.backgroundColor = "black";
blackOption.textContent = "black";

const blueOption = document.createElement("option");
blueOption.style.backgroundColor = "blue";
blueOption.textContent = "blue";

const redOption = document.createElement("option");
redOption.style.backgroundColor = "red";
redOption.textContent = "red";

const greenOption = document.createElement("option");
greenOption.style.backgroundColor = "green";
greenOption.textContent = "green";

const purpleOption = document.createElement("option");
purpleOption.style.backgroundColor = "purple";
purpleOption.textContent = "purple";

select.appendChild(blackOption);
select.appendChild(blueOption);
select.appendChild(redOption);
select.appendChild(purpleOption);
select.appendChild(greenOption);

/* Grid Slider */
const slideContainer = document.createElement("div")
slideContainer.classList.add("slideContainer");

const slider = document.createElement("input");
slider.type = "range";
slider.min = "16";
slider.max = "32";
slider.value = "16";
slider.addEventListener("input", () => createGrid(slider.value));

slideContainer.appendChild(slider);

selectionBar.appendChild(select);
selectionBar.appendChild(slideContainer);


/* Add everything to holder */
const grid = document.createElement("div");
grid.classList.add("grid");
holder.appendChild(header);
holder.appendChild(selectionBar);
holder.appendChild(grid);

createGrid(16);

/* Function to create a grid */
function createGrid(pixels){
    clearChildren(grid);
    var tileSize = 350/pixels;
    for(let i = 0; i < pixels;i++){
        let col = document.createElement("div");
        col.classList.add("column");
        for(let j = 0; j < pixels; j++){
            let section = document.createElement("div");
            section.classList.add("tile");
            section.style.width = tileSize + "px";
            section.style.height = tileSize + "px";
            section.addEventListener("mouseover",() => changeTile(section))
            col.appendChild(section);
        }
        grid.appendChild(col);
    }
}

function changeTile(section){
    section.style.backgroundColor = color;
}

function clearChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function changeColor(newColor){
    select.style.backgroundColor = newColor;
    color = newColor;
    select.style.color = "white";
}