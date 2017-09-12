const reselect = require('reselect');
const simple = require('./simple');
const values = require('lodash/values');

module.exports = reselect.createSelector(
	[simple.getQuestions],
	(questions) => {
		return values(questions);
	}
);