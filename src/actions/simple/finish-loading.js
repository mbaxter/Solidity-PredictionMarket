const ActionType = require('../../constants/action-type');

module.exports = function finishLoading() {
	return {
		type: ActionType.FINISH_LOADING
	};
};