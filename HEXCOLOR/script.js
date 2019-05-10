//var
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];// get all the charachters needed to create a hex color
const hexBtn = document.querySelector('.hexBtn');// tagged the .hexBtn class.
const bodyBcg = document.querySelector('body'); // tagged the body element.
const hex = document.querySelector('.hex'); //tagged the .hex class from <span> where will be placed the color-code

hexBtn.addEventListener('click', getHex);

function getHex() {
    let hexCol = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);//shuffles the numbers and letters within the erray
        //console.log(random);
        hexCol += hexNumbers[random]; // will add the '#' to letters and numbers randomly.
        //console.log(hexCol);
        
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;//place the color code within the span tag.
}
