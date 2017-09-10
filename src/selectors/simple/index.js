const SimpleSelectors = {};
const get = require('lodash/get');

SimpleSelectors.getAccounts = (state) => {
	return get(state, 'eth.accounts', []);
};

SimpleSelectors.getActiveAccount = (state) => {
	return get(state, 'eth.activeAccount', null);
};

SimpleSelectors.getAccountIsOwner = (state, account) => {
	return get(state, `eth.accountAttributes[${account}].isOwner`, false);
};

SimpleSelectors.isLoading = (state) => {
	return get(state, 'ui.loader.requests', 0) > 0;
};

SimpleSelectors.isContractOwnedBy = (state, contractAddress, userAddress) => {
	return get(state, `eth.contracts[${contractAddress}].owner`, null) === userAddress && userAddress;
};

module.exports = SimpleSelectors;