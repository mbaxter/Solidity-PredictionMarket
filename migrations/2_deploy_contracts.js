const PredictionMarket = artifacts.require("./PredictionMarket.sol");

module.exports = function(deployer, network, accounts) {
	// if (accounts.length < 2) {
	// 	throw new Error("At least 2 available accounts must be available in order to deploy");
	// }
	deployer.deploy(PredictionMarket);
};
