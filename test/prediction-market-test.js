const assertTxFailed = require('../test-util/assert-transaction-fails');
let PredictionMarket = artifacts.require("./PredictionMarket.sol");
const ethUtil = require('ethereumjs-util');
const assert = require('chai').assert;

contract('PredictionMarket', function(accounts) {

	let gasLimit, contract, txOptions, owner;
	before(async () => {
		gasLimit = 1000000;
		owner = accounts[0];
		contract = await PredictionMarket.deployed();
		txOptions = {gas: gasLimit, from: owner};
	});

	describe('create contract', () => {

		before(async () => {
			contract = await PredictionMarket.new();
		});

		it('should return a contract', async () => {
			assert.exists(contract);
			assert.exists(contract.address);
		});
	});

	describe('addQuestion.call()', () => {

		let retVal;
		before(async () => {
			contract = await PredictionMarket.new();
			retVal = await contract.addQuestion.call("Will the sun rise tomorrow?", txOptions);
		});

		it('should return a count of 1', () => {
			assert.equal(retVal, "1");
		});
	});


	describe('addQuestion()', () => {

		let txHash;
		let description;
		before(async () => {
			contract = await PredictionMarket.new();
			description = "Will the sun rise tomorrow?";
			txHash = await contract.addQuestion(description, txOptions);
		});

		it('should return a txHash', async () => {
			assert.exists(txHash);
		});

		it('should not consume all of the gas', async () => {
			assert.isTrue(txHash.receipt.gasUsed < txOptions.gas);
		});

		it('should produce a log', async () => {
			assert.isTrue(txHash.logs.length === 1);
			assert.equal(txHash.logs[0].args.description, description, "With a matching description");
			assert.equal(txHash.logs[0].args.questionCount, 1, "And a questionCount of 1");
			assert.exists(txHash.logs[0].args.question, "And an address");
		});

		it('should increment the question count', async () => {
			const actualCount = await contract.questionCount.call(txOptions);
			assert.equal(actualCount.toString(), "1");
		});

		describe('when called twice', async () => {
			it('should increment the question count again', async () => {
				await contract.addQuestion("Another one?", txOptions);
				const actualCount = await contract.questionCount.call(txOptions);
				assert.equal(actualCount.toString(), "2");
			});
		});
	});




});
