// EXAMPLE 2: Functionality depends on what has been clicked
// https://codepen.io/vanwars/pen/KYjgzL
// event handler:
const changeColor = (ev) => {
    console.log(ev);
    console.log(ev.currentTarget);
 };
 
 // event listener attach to all of the buttons:
 document.querySelector('#color1').onclick = changeColor;
 document.querySelector('#color2').onclick = changeColor;
 document.querySelector('#color3').onclick = changeColor;
