const SimpleActions = {};
const get = require('lodash/get');

SimpleActions.getAccounts = (state) => {
	return get(state, 'eth.accounts', []);
};

module.exports = SimpleActions;