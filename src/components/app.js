const React = require('react');
const PropTypes = require('prop-types');
const ReactRedux = require('react-redux');
const Loader = require('./pure/loader');
const actions = require('../actions');
const ChooseWeb3Account = require('./choose-web3-account');

class App extends React.Component {

	componentDidMount() {
		this.props.load();
	}

	render() {
		return (
			<div>
				Hello World!
				<Loader isEnabled={true}></Loader>
				<ChooseWeb3Account/>
			</div>
		);
	}
}

App.propTypes = {
	load: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
	return {
		load: () => {
			dispatch(actions.load());
		}
	};
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);