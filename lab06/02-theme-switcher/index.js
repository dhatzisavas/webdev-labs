/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/
// document.querySelector("#a1").addEventListener('click', makeBigger);
// document.querySelector("#a2").addEventListener('click', makeSmaller);

const changeTheme = (theme) =>
   document.querySelector("body").className = theme

document.querySelector("#desert").addEventListener('click', () => {changeTheme("desert")})
document.querySelector("#ocean").addEventListener('click', () => {changeTheme("ocean")})
document.querySelector("#high-contrast").addEventListener('click', () => {changeTheme("high-contrast")})
document.querySelector("#default").addEventListener('click', () => {changeTheme("")})