const ActionType = require('../../../constants/action-type');

const AccountsReducer = (state = [], action) => {
	 switch(action.type) {
		 case ActionType.SET_ACCOUNTS:
		 	return action.accounts;
		 default:
		 	return state;
	 }
};

module.exports = AccountsReducer;