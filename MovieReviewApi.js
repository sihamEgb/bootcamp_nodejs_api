// Movie Reviews API
const request = require('request');
const fetch = require('node-fetch');

const appId = 'vnru9kaegEQKSIDk5YOF1oNSWW7CR8Gu';
const endpoint = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=`;

const reviews1 = (title, callback) => {

    const url = `${endpoint}${title}&api-key=${appId}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to movie reviews API!', undefined)
        } else if (body.error) {
            callback('Unable to find title', undefined)
        } else {
            callback(undefined, body.results);
        }
    })
}

const reviews2 = (title, callback) => {
    const url = `${endpoint}${title}&api-key=${appId}`

	fetch(url)
    .then(res => res.json())
	.then(json => console.log(json));
		
}
module.exports = {
    reviews1,
    reviews2,
}
