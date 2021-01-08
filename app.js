import { addClickHandler, diffClickHandler, multClickHandler, divClickHandler } from './handlers';

const addButton = document.getElementById('addition-button');
const subButton = document.getElementById('subtraction-button');
const multButton = document.getElementById('multiplication-button');
const divButton = document.getElementById('division-button');

addButton.addEventListener('click', addClickHandler);
subButton.addEventListener('click', diffClickHandler);
multButton.addEventListener('click', multClickHandler);
divButton.addEventListener('click', divClickHandler);

                      
