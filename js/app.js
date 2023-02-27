const generateButton = document.querySelector('.btn');

import { generateJoke } from './data.js';
import { renderJoke } from './ui.js';



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