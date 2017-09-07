const ActionType = require('../../constants/action-type');

module.exports = function setAccounts(accounts) {
	return {
		type: ActionType.SET_ACCOUNTS,
		accounts
	};
};