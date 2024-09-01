// JAVASCRIPT PROJECTS 
// Dropdown-Box 
// Variables 

let sideContent = document.querySelector('.side-content');


let dropDownBox = document.querySelector('.dropdown-box');

let icon = document.querySelector('.fa');

sideContent.addEventListener('click', (e) =>{
    
    dropDownBox.classList.add('bread')
    e.target.style.backgroundColor = 'transparent';
    e.target.style.color = 'white';

})

sideContent.addEventListener('mouseover',(e)=>{
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'black';
});

icon.addEventListener('click', () =>{
    if(dropDownBox.classList.contains('bread')){
        dropDownBox.classList.remove('bread');
    } 
})