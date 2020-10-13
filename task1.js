const {reviews1,reviews2} = require('./MovieReviewApi');

// using request
reviews1("godfather",(error,data) => {
	console.log(data);
	console.log(error);
})

// using note-fetch
reviews2("godfather",(error,data) => {
	console.log(data);
	console.log(error);
})

