class Joke {
    constructor (icon_url, value) {
        this.icon_url = icon_url;
        this.value = value;
    };
};

export const generateJoke = () => {
    return fetch(`https://api.chucknorris.io/jokes/random`)
    .then((res) => {
        return res.json();
    })
    .then((rawObject) => {
        return new Joke (rawObject.icon_url, rawObject.value);
    })
};