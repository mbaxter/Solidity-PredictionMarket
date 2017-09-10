const ActionType = require('../../../constants/action-type');

const ActiveAccountReducer = (state = null, action) => {
	 switch(action.type) {
		 case ActionType.SET_ACTIVE_ACCOUNT:
		 	return action.account;
		 default:
		 	return state;
	 }
};

module.exports = ActiveAccountReducer;