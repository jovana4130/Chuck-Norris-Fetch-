class Joke {
    constructor (icon_url, value) {
        this.icon_url = icon_url;
        this.value = value;
    };
};

export const generateJoke = () => {
    return fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => 
        res.json()
    )
    .then((joke) => {
        new Joke (joke.icon_url, joke.value);
    });
};