const ActionType = require('../../constants/action-type');

module.exports = function setQuestions(questions) {
	return {
		type: ActionType.SET_QUESTION,
		questions
	};
};