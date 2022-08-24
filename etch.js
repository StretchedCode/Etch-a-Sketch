
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

});
