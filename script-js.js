const main = document.querySelector('.main');
const setSize = document.querySelector('.set-size');
const resetbtn = document.querySelector('.resetbtn');



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
        div.style.backgroundColor = 'black';
    })
    container.appendChild(div);
}




    
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
            div.style.backgroundColor = 'black';
        })
        container.appendChild(div);
    }
})

resetbtn.addEventListener('click', function(){
    window.location.reload();
})

