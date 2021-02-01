// See CodePen: https://codepen.io/vanwars/pen/KYjNQm?editors=0010

// event handler:
const fontSizer = ev => {
    console.log(ev);
    console.log(ev.currentTarget);
};

// event listener attach to all of the buttons:
document.querySelector("#font_sizer").onclick = fontSizer;