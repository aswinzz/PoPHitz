var moviesJSON = require('../movies.json');

// Home Route
exports.home = function(req, res) {

	var years = moviesJSON.years;

	res.render('home', {
		title: "Top Songs",
		years : years
	});
};

// Movie-single route
exports.movie_single = function(req, res) {
	var year_number = req.params.year_number;

	var years = moviesJSON.years;

	// Only render the movie_single template for episodes that exist
	if (year_number >= 2013 && year_number <= 2017) {

		var year = years[year_number - 2013];

		var title = year.title;

		var main_characters = year.main_characters;
		
		res.render('movie_single', {
			years : years,
			year : year,
			title : title,
			year_number : year_number,
			main_characters : main_characters
		});

	} else {
		res.render('notFound', {
			years : years,
			title : "Oops, this page doesn't exist"
		});
	}

};

// Route for all other page requests
exports.notFound = function(req, res) {
	var years = moviesJSON.years;
	res.render('notFound', {
		years : years,
		title : "Oops, this page doesn't exist"
	});
};