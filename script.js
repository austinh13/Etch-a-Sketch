const mainBody = document.body;

/* Initial Screen */

const holder = document.createElement("div");
holder.classList.add("holder");
mainBody.appendChild(holder);

/* Header */
const header = document.createElement("h1");
header.classList.add("header");
header.innerHTML = "Etch-a-Sketch!"

/* Selection Bar */
const selection = document.createElement("div");
selection.classList.add("selector");

const select = document.createElement("select");
select.classList.add("dropDown");

const blueOption = document.createElement("option");
blueOption.style.backgroundColor = "blue";

const redOption = document.createElement("option");
redOption.style.backgroundColor = "red";

const greenOption = document.createElement("option");
greenOption.style.backgroundColor = "green";

select.appendChild(blueOption);
select.appendChild(redOption);
select.appendChild(greenOption);
selection.appendChild(select);


/* Add everything to holder */
const grid = document.createElement("div");
grid.classList.add("grid");
holder.appendChild(selection);
holder.appendChild(header);
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
            section.addEventListener("mouseover",() => changeColor(section))
            col.appendChild(section);
        }
        grid.appendChild(col);
    }
}

function changeColor(section){
    section.style.backgroundColor = "black";
}
