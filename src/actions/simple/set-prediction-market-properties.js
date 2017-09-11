const ActionType = require('../../constants/action-type');

module.exports = function setPredictionMarketProperties(properties) {
	return {
		type: ActionType.SET_PREDICTION_MARKET_PROPERTIES,
		properties
	};
};