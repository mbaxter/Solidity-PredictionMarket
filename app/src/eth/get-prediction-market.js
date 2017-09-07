const truffleContract = require('truffle-contract');
const contractJson = require('../../../build/contracts/PredictionMarket.json');

module.exports = function getPredictionMarket(web3) {
	const predictionMarket = truffleContract(contractJson);
	predictionMarket.setProvider(web3.currentProvider);
	return predictionMarket;
};