const simple = require('./simple');
const co = require('co');
const PredictionMarket = require('../eth/contract/prediction-market');
const watchForNewQuestions = require('./watch-for-new-questions');

module.exports = function watchNetwork() {
	return (dispatch) => {
		dispatch(watchForNewQuestions());
	};
};
