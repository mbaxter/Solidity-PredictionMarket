const ReactRedux = require('react-redux');
const Loader = require('./pure/loader');
const selectors = require('../selectors');

const mapStateToProps = (state) => {
	 return {
	 	isEnabled: selectors.simple.isLoading(state)
	 };
};
const mapDispatchToProps = () => ({});

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Loader);