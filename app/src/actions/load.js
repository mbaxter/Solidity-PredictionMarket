const simple = require('./simple');
const co = require('co');
const getEthAccounts = require('./get-eth-accounts');

module.exports = function load() {
	return (dispatch, getState) => {
		co(function*() {
			dispatch(getEthAccounts());
		}).catch((err) => {
			throw(err);
		});
	};
};
