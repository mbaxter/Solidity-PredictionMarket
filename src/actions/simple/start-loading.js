const ActionType = require('../../constants/action-type');

module.exports = function startLoading() {
	return {
		type: ActionType.START_LOADING
	};
};