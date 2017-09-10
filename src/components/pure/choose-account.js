const React = require('react');
const PropTypes = require('prop-types');

const ChooseAccount = ({ accounts }) => {
	  if (accounts.length === 0) {
	  	    return (
	  	    	<p>No accounts found!</p>
	        );
	  } else {
	  	return (
	  		<p>Found {accounts.length} accounts! ({JSON.stringify(accounts)})</p>
	    );
	  }
};

ChooseAccount.propTypes = {
	accounts: PropTypes.arrayOf(PropTypes.string).isRequired
};

module.exports = ChooseAccount;