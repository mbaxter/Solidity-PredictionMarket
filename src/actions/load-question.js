const simple = require('./simple');
const co = require('co');
const PredictionMarketQuestion = require('../eth/contract/prediction-market-question');

module.exports = function loadQuestion(address) {
	return co(function*() {
		const questionContract = yield PredictionMarketQuestion.at(address);
		const description = yield questionContract.description.call();
		const bettingIsOpen = yield questionContract.bettingIsOpen.call();
		const outcome = yield questionContract.actualOutcome.call();
		const yesBetTotal = parseInt(yield questionContract.yesBetTotal.call(), 10);
		const noBetTotal = parseInt(yield questionContract.noBetTotal.call(), 10);
		const betCount = parseInt(yield questionContract.betCount.call(), 10);
		const question = { address, description, bettingIsOpen, outcome, yesBetTotal, noBetTotal, betCount };

		return simple.setQuestion(question);
	}).catch((err) => {
		console.error(err);
	});
};
