const main = document.querySelector('.main');
const setSize = document.querySelector('.set-size');
const resetbtn = document.querySelector('.resetbtn');
const colorbtn = document.querySelector('.colorbtn');
const rainbowbtn = document.querySelector('.rainbowbtn')
const colorlabel = document.querySelector('.colorlabel');

var input = setSize.value;
var container = document.createElement('div');
container.setAttribute('class', 'container')
main.appendChild(container);
for(let i = 1; i<= input * input; i++){
    const div = document.createElement('div');
    div.setAttribute('class', 'square');
    div.style.width = `${100/input}%`;
    div.style.height = `${100/input}%`;

    div.addEventListener('mouseover', function(){
        div.style.backgroundColor = colorbtn.value;
    })
    container.appendChild(div);
}



//Setting new size/pixels
    
setSize.addEventListener('click', function(){
    container.remove();
    container = document.createElement('div');
    container.setAttribute('class', 'container')
    main.appendChild(container);

    input = setSize.value;
    for(let i = 1; i<= input * input; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.style.width = `${100/input}%`;
        div.style.height = `${100/input}%`;
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = colorbtn.value;
        })
        container.appendChild(div);
    }
})

rainbowbtn.addEventListener('click', function(){
    container.remove();
    colorbtn.remove();
    colorlabel.remove();
    container = document.createElement('div');
    container.setAttribute('class', 'container')
    main.appendChild(container);

    input = setSize.value;
    for(let i = 1; i<= input * input; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'square');
        div.style.width = `${100/input}%`;
        div.style.height = `${100/input}%`;
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

