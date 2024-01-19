const main = document.querySelector('.main');
const setSize = document.querySelector('.set-size');
const resetbtn = document.querySelector('.resetbtn');
const colorbtn = document.querySelector('.colorbtn');
const rainbowbtn = document.querySelector('.rainbowbtn')
const colorlabel = document.querySelector('.colorlabel');
const square = document.querySelectorAll('.square');
const sizeinfo = document.querySelector(`.size-info`);


//We create the container for the elements

var container = document.createElement('div');
container.setAttribute('class', 'container')
main.appendChild(container);

// Function to create elements for the table
const createTable = function(){
    for(let i = 1; i<= input * input; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.style.width = `calc(${100/input}% - 1px`;
        div.style.height = `calc(${100/input}% - 1px`;
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = colorbtn.value;
        })
        container.appendChild(div);
        
    }
}

// Function to clear table/delete all elements
const removeTable = function(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// Creating default table
var input = setSize.value; 
sizeinfo.innerHTML = `Grid size: ${input} X ${input}`;
createTable();



//Setting new size/pixels
    
setSize.addEventListener('click', function(){
    removeTable();
    input = setSize.value;
    sizeinfo.innerHTML = `Grid size: ${input} X ${input}`;
    createTable();
})

rainbowbtn.addEventListener('click', function(){
    removeTable();
    colorbtn.remove();
    colorlabel.remove();

    input = setSize.value;
    for(let i = 1; i<= input * input; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.style.width = `calc(${100/input}% - 1px`;
        div.style.height = `calc(${100/input}% - 1px`;
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        })
        container.appendChild(div);
    }
})

//Reset everything / page
resetbtn.addEventListener('click', function(){
    window.location.reload();
})
