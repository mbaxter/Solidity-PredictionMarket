const truffleContract = require('truffle-contract');
const contractJson = require('../../../../build/contracts/PredictionMarket.json');
const web3 = require('../web3');

function getPredictionMarket(web3) {
	const predictionMarket = truffleContract(contractJson);
	predictionMarket.setProvider(web3.currentProvider);
	return predictionMarket;
};

module.exports = getPredictionMarket(web3);