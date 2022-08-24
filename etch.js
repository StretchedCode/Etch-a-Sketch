
const sketchPad = document.querySelector('.sketchPad');

function defaultGrid(){

    for (let i = 0; i < 16; i++){
        const div = document.createElement('div');
        sketchPad.appendChild(div);
    }
}

defaultGrid();