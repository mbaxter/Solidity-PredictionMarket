const ActionType = require('../../constants/action-type');

module.exports = function setContractOwner(account, isOwner) {
	return {
		type: ActionType.SET_CONTRACT_OWNER,
		account,
		isOwner
	};
};