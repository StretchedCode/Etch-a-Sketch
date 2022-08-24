
const sketchPad = document.querySelector('.sketchPad');

function defaultGrid(gridSize){

    for (let i = 0; i < gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('tile');
        div.style.height = `calc(100vh / ${Math.sqrt(gridSize)})`;
        div.style.width = `calc(100vw / ${Math.sqrt(gridSize)})`;
        sketchPad.appendChild(div);
    }
}
defaultGrid(16);