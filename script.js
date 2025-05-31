const mainBody = document.body;
var color = "black";
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
selectionBar.appendChild(select);


/* Add everything to holder */
const grid = document.createElement("div");
grid.classList.add("grid");
holder.appendChild(header);
holder.appendChild(selectionBar);
holder.appendChild(grid);

createGrid(16);

/* Function to create a grid */
function createGrid(pixels){
    for(let i = 0; i < pixels;i++){
        let col = document.createElement("div");
        col.classList.add("column");
        for(let j = 0; j < pixels; j++){
            let section = document.createElement("div");
            section.classList.add("tile");
            section.addEventListener("mouseover",() => changeTile(section))
            col.appendChild(section);
        }
        grid.appendChild(col);
    }
}

function changeTile(section){
    section.style.backgroundColor = color;
}


function changeColor(newColor){
    select.style.backgroundColor = newColor;
    color = newColor;
    select.style.color = "white";
}