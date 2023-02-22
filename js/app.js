const generateButton = document.querySelector('#clickMe');

import {generateJoke} from './data.js';
import { renderJoke } from './ui.js';

const generateNewJoke = () => {
    generateJoke().then((joke) => {
        renderJoke(joke);
    });
};

generateButton.addEventListener('click', generateNewJoke);