
const sketchPad = document.querySelector('.sketchPad');

function defaultGrid(gridSize){

    for (let i = 0; i < gridSize; i++){
        const div = document.createElement('div');
        div.style.height = `calc(100vh / ${Math.sqrt(gridSize)})`;
        div.style.width = `calc(100vw / ${Math.sqrt(gridSize)})`;
        div.addEventListener('pointerenter', function(e){
            div.classList.add('tile');
        });

        sketchPad.appendChild(div);
    }
    
}
defaultGrid(256);

const button = document.querySelector('#gridSize');
button.addEventListener('click', function (e){
    let newSize = prompt('Please enter grid size');

    if (newSize > 10000){
        newSize = 10000;
        console.log(newSize);

    } 
    while(sketchPad.firstChild){
        sketchPad.removeChild(sketchPad.firstChild);
    }
    defaultGrid(newSize);
});
