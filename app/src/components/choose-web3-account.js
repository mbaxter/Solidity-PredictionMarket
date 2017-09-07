const ReactRedux = require('react-redux');
const ChooseAccount = require('./pure/choose-account');
const actions = require('../actions');
const selectors = require('../selectors');

const mapStateToProps = (state) => {
	return {
		accounts: selectors.simple.getAccounts(state)
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onDismiss: (alertId) => {
// 			dispatch(actions.sync.dismissAlert(alertId));
// 		}
// 	};
// };

module.exports = ReactRedux.connect(
	mapStateToProps//,
	// mapDispatchToProps
)(ChooseAccount);