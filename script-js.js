const container = document.querySelector('.container');



// 16x16 -> 256 boxes
// size of 1 box -> 100%/256
var input = prompt();
var boxes = input * input ;

for(let i = 1; i<= boxes; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.style.width = `${100/input}%`;
    div.style.height = `${100/input}%`;

    container.appendChild(div);

}

