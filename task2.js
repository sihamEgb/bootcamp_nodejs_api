const https = require('https')

const appId = 'vnru9kaegEQKSIDk5YOF1oNSWW7CR8Gu';
const title = 'godfather';
const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${title}&api-key=${appId}`;

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()