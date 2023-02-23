const generateButton = $('#clickMe');

import { generateJoke } from './data';
import { renderJoke } from './ui';

const generateNewJoke = () => {
    generateJoke().then((joke) => {
        renderJoke(joke);
    });
};

generateButton.addEventListener('click', generateNewJoke);