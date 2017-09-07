const simple = require('./simple');
const co = require('co');
const web3 = require('../eth/web3');

module.exports = function getEthAccounts() {
	return (dispatch, getState) => {
		co(function*() {
			const accounts = yield web3.eth.getAccountsPromise();
			dispatch(simple.setAccounts(accounts));
		});
	};
};
