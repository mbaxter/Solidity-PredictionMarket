const Redux = require('redux');
const accounts = require('./accounts');
const activeAccount = require('./active-account');
const contracts = require('./contracts');

module.exports = Redux.combineReducers({
	accounts,
	activeAccount,
	contracts
});