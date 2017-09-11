const PredictionMarket = require('../eth/contract/prediction-market');
const selectors = require('../selectors');
const co = require('co');
const web3 = require('../eth/web3');
const EthConstants = require('../constants/eth');

module.exports = function addQuestion(description) {
	return (dispatch, getState) => {
		return co(function*() {
			const state = getState();
			const account = selectors.simple.getActiveAccount(state);
			if (!description) {
				throw new Error("Description required to create a question");
			}
			if (!account) {
				throw new Error("Cannot add question without an active account");
			}

			const predictionMarket = yield PredictionMarket.deployed();
			const txHash = yield predictionMarket.addQuestion(description, {from: account, gas: EthConstants.GAS});
			// console.log(txHash);
		}).catch((err) => {
			console.error(err);
		});
	};
};