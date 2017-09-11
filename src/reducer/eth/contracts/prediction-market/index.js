const Action = require('../../../../constants/action-type');

const predictionMarket = (state = {}, action) => {
	switch(action.type) {
		case Action.SET_PREDICTION_MARKET_PROPERTIES:
			return {
				... state,
				... action.properties
			};
		default:
			return state;
	}
};

module.exports = predictionMarket;