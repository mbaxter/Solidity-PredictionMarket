const Redux = require('redux');
const eth = require('./eth');
const ui = require('./ui');

module.exports = Redux.combineReducers({
	eth,
	ui
});