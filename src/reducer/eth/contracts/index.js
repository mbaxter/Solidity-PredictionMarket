const Action = require('../../../constants/action-type');

const contract = (state = {}, action) => {
	switch(action.type) {
		case Action.SET_CONTRACT_OWNER:
			return {
				... state,
				owner: action.owner
			};
		default:
			return state;
	}
};

const contracts = (state = {}, action) => {
	switch(action.type) {
		case Action.SET_CONTRACT_OWNER:
			const address = action.contractAddress;
			return {
				... state,
				[address]: contract(state[address], action)
			};
		default:
			return state;
	}
};

module.exports = contracts;