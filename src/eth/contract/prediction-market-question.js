const truffleContract = require('truffle-contract');
const contractJson = require('../../../build/contracts/PredictionMarketQuestion.json');
const web3 = require('../web3');

function getPredictionMarketQuestion(web3) {
	const predictionMarketQuestion = truffleContract(contractJson);
	predictionMarketQuestion.setProvider(web3.currentProvider);
	return predictionMarketQuestion;
}

module.exports = getPredictionMarketQuestion(web3);