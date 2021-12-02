const input = document.querySelector('.menu-toggle input');
const menu = document.querySelector('.menu ul');

let slide = () => {
  menu.classList.toggle('slide');
}; 

input.addEventListener('click',slide);


let chataku = () => {window.open('https://github.com/mbimoad');};