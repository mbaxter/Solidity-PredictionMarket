const assertTxFailed = require('../test-util/assert-transaction-fails');
let Remittance = artifacts.require("./Splitter.sol");
const ethUtil = require('ethereumjs-util');

contract('Remittance', function(accounts) {

	let gasLimit, splitter, txOptions;
	before(async () => {
		gasLimit = 1000000;
		splitter = await Remittance.deployed();
		txOptions = {gas: gasLimit, from:accounts[0]};
	});

	// Todo - add tests
	describe('create contract', () => {


	});


});
