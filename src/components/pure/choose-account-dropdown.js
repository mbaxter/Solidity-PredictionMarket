const React = require('react');
const PropTypes = require('prop-types');

const ChooseAccountDropdown = ({ accounts, selectedAccount, onSelect }) => {
	  if (accounts.length === 0) {
	  	    return (
	  	    	<div>
		            <p>Oops - No accounts found!</p>
			        <p className="help-block">Make sure you have access to the ethereum network.</p>
		        </div>
	        );
	  } else {
	  	return (
	  		<form>
			    <div className="form-group">
				    <label>Choose an account:</label>
				    <select className="form-control" value={selectedAccount || ''} onChange={(event) => onSelect(event.target.value)}>
					    <option>Select Account</option>
					    {accounts.map((account, index) => {
						    return (
							    <option key={index} value={account}>{account}</option>
						    );
					    })}
				    </select>
			    </div>
		    </form>
	    );
	  }
};

ChooseAccountDropdown.propTypes = {
	accounts: PropTypes.arrayOf(PropTypes.string).isRequired,
	selectedAccount: PropTypes.string,
	onSelect: PropTypes.func
};

module.exports = ChooseAccountDropdown;