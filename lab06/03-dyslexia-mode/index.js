// Adjust the letter and word spacing to the recommended settings
// Disables ligatures
// Modify the line spacing
// Modify either the font weight (to be bolder) or the color (to be darker)
// Make the font-size bigger
// Narrow the line width (lines that are too long in the horizontal direction are hard to read) 

const changeTheme = (theme) =>
  document.querySelector("body").className = theme

const dyslexiaMode = () => !document.querySelector("body").className ?
  changeTheme("dyslexia") :
  changeTheme("")

document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaMode)