const increaseFont = (select, percentInc) => {
   fontString = document.querySelector(select).style.fontSize
   document.querySelector(select).style.fontSize =
      fontString ?
         fontString <= "60pt" ?
            (parseInt(fontString.substring(0, fontString.length - 2)) * (1 + percentInc)) + "pt" :
            fontString :
         select == "h1" ?
            "32pt" :
            select == "div.content" ?
               "13pt" :
               fontString

};

const makeBigger = () => {
   increaseFont("h1", .25);
   increaseFont("div.content", .25);
};

const makeSmaller = () => {
   increaseFont("h1", -.25);
   increaseFont("div.content", -.25);
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

