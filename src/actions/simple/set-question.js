const ActionType = require('../../constants/action-type');

module.exports = function setQuestions(question) {
	return {
		type: ActionType.SET_QUESTION,
		question
	};
};