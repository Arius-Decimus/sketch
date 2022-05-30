const body = document.body;
const grid = document.querySelector('#grid');
const initialize = document.querySelector('#initialize');
const div = document.createElement('div');
div.setAttribute('id', 'div');

function divCreator() {
  for (i = 0; i < 256; i++) {
    grid.appendChild(div.cloneNode());
    console.log('loop ' + i);
  }
}

initialize.addEventListener('click', () => {
  divCreator();
});