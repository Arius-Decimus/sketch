const body = document.body;
const grid = document.querySelector('#grid');
const square = document.createElement('div');

function squareCreator() {
  for (i = 1; i < 257; i++) {
    square.setAttribute('class', 'square');
    square.setAttribute('id', 'square ' + i);
    grid.appendChild(square.cloneNode());
  }
  if (i = 257) {
    console.log('squareCreator run here.');
    return;
  }
}

function squareText () {
  for (i = 0; i < 256; i++) {
    let number = i + 1;
    squares[i].innerHTML = '#' + number;
    ;
  }
}

squareCreator();



const squares = document.querySelectorAll('.square');



squares.forEach((square) => {
  function removeStyle() {
    square.setAttribute('class', 'square');
  }

  square.addEventListener('mouseenter',() => {
    square.setAttribute('class', 'square2');
  });
  square.addEventListener('mouseout', () => {
    setTimeout(removeStyle, '1000');
  })
});