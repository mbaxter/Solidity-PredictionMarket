const simple = require('./simple');
const co = require('co');
const web3 = require('../eth/web3');
const PredictionMarket = require('../eth/contract/prediction-market');
const PredictionMarketQuestion = require('../eth/contract/prediction-market-question');
const coParallel = require('co-parallel');
const loadQuestion = require('./load-question');

module.exports = function loadQuestions() {
	return (dispatch, getState) => {
		co(function*() {

			dispatch(simple.startLoading());
			const predictionMarket = yield PredictionMarket.deployed();

			// Get questions
			const questionCountRes = yield predictionMarket.questionCount.call();
			const questionCount = parseInt(questionCountRes.toString(), 10);
			const questionThunks = [];
			for (let i = 0; i < questionCount; i++) {
				questionThunks.push(function*() {
					const address = yield predictionMarket.questions.call(i);
					const questionAction = yield loadQuestion(address);
					dispatch(questionAction);
				});
			}
			yield* coParallel(questionThunks, 5);

		}).catch((err) => {
			console.error(err);
			dispatch(simple.finishLoading());
		}).then(() => {
			dispatch(simple.finishLoading());
		});
	};
};
