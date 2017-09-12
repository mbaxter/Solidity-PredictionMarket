const SimpleSelectors = {};
const get = require('lodash/get');
const values = require('lodash/values');

SimpleSelectors.getAccounts = (state) => {
	return get(state, 'eth.accounts', []);
};

SimpleSelectors.getActiveAccount = (state) => {
	return get(state, 'eth.activeAccount', null);
};

SimpleSelectors.isLoading = (state) => {
	return get(state, 'ui.loader.requests', 0) > 0;
};

SimpleSelectors.getPredictionMarketOwner = (state) => {
	return get(state, 'eth.contracts.predictionMarket.owner', null);
};

SimpleSelectors.getQuestions = (state) => {
	return get(state, 'eth.contracts.questions', {});
};

module.exports = SimpleSelectors;