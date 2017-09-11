const Redux = require('redux');
const predictionMarket = require('./prediction-market');
const questions = require('./questions');

module.exports = Redux.combineReducers({
	predictionMarket,
	questions
});