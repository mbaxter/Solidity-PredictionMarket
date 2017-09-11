const simple = require('./simple');
const co = require('co');
const web3 = require('../eth/web3');

module.exports = function getEthAccounts() {
	return (dispatch, getState) => {
		co(function*() {
			dispatch(simple.startLoading());
			const accounts = yield web3.eth.getAccountsPromise();
			dispatch(simple.setAccounts(accounts));
		}).catch((err) => {
			dispatch(simple.finishLoading());
		}).then(() => {
			dispatch(simple.finishLoading());
		});
	};
};
