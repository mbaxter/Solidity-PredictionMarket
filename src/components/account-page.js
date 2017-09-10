const ReactRedux = require('react-redux');
const ChooseAccountDropdown = require('./pure/choose-account-dropdown');
const actions = require('../actions');
const selectors = require('../selectors');

const AccountPage = ({ activeAccount, accounts, onSelect }) => {
	return (
		<div>
			<h1>Welcome, {activeAccount || 'Anonymous User'}!</h1>
			<ChooseAccountDropdown onSelect={onSelect} accounts={accounts} selectedAccount={activeAccount}/>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		activeAccount: selectors.simple.getActiveAccount(state),
		accounts: selectors.simple.getAccounts(state)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onSelect: (account) => {
			dispatch(actions.simple.setActiveAccount(account));
		}
	};
};

module.exports = ReactRedux.connect(
	mapStateToProps,
	mapDispatchToProps
)(AccountPage);