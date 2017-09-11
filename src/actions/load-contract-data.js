const simple = require('./simple');
const co = require('co');
const web3 = require('../eth/web3');
const PredictionMarket = require('../eth/contract/prediction-market');
const loadQuestions = require('./load-questions');

module.exports = function loadContractData() {
	return (dispatch, getState) => {
		co(function*() {
			dispatch(simple.startLoading());

			// Get owner
			const predictionMarket = yield PredictionMarket.deployed();
			const owner = yield predictionMarket.owner.call();
			dispatch(simple.setPredictionMarketProperties({ owner }));

			// Get questions
			dispatch(loadQuestions());

		}).catch((err) => {
			console.error(err);
			dispatch(simple.finishLoading());
		}).then(() => {
			dispatch(simple.finishLoading());
		});
	};
};
