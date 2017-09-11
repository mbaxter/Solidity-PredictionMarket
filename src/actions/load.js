const simple = require('./simple');
const co = require('co');
const getEthAccounts = require('./get-eth-accounts');
const loadContractData = require('./load-contract-data');

module.exports = function load() {
	return (dispatch, getState) => {
		co(function*() {
			dispatch(getEthAccounts());
			dispatch(loadContractData());
		}).catch((err) => {
			throw(err);
		});
	};
};
