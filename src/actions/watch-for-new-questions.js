const simple = require('./simple');
const co = require('co');
const PredictionMarket = require('../eth/contract/prediction-market');
const loadQuestion = require('./load-question');

module.exports = function watchForNewQuestions() {
	return (dispatch) => {
		co(function* () {
			const predictionMarket = yield PredictionMarket.deployed();
			predictionMarket.LogQuestionAdded().watch((err, result) => {
				if (err) {
					console.error(err);
					return;
				}

				console.log(result);
				dispatch(loadQuestion(result.args.question));
			});
		}).catch((err) => {
			console.error(err);
		});
	};
};
