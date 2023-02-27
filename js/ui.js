const mainContent = document.querySelector('joke-container');

export const renderJoke = (joke) => {
    let ChuckHtml = `
    <p class='joke-text'>${joke.value}'</p>
    `;
    mainContent.innerHTML = ChuckHtml;
};