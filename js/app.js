const generateButton = document.querySelector('ClickMe');

import { generateJoke } from './data';
import { renderJoke } from './ui';



const generateNewJoke = () => {
    generateJoke()
    .then(joke => {
        renderJoke(joke)});
};

window.onload = function() {
    generateJoke()
    .then(joke => 
        {renderJoke(joke)});
};

generateButton.addEventListener('click', generateNewJoke);