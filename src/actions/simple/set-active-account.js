const ActionType = require('../../constants/action-type');

module.exports = function setActiveAccount(account) {
	return {
		type: ActionType.SET_ACTIVE_ACCOUNT,
		account
	};
};