const Action = require('../../../../constants/action-type');

const questions = (state = {}, action) => {
	switch(action.type) {
		case Action.SET_QUESTION:
			return {
				... state,
				[action.question.address]: action.question
			};
		default:
			return state;
	}
};

module.exports = questions;