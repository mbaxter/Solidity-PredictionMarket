const React = require('react');
const PropTypes = require('prop-types');
const ReactRedux = require('react-redux');
const actions = require('../actions');
const selectors = require('../selectors');
import AppLoader from './app-loader';
import NavBar from './nav-bar';

class App extends React.Component {

	componentDidMount() {
		this.props.load();
		this.props.watchNetwork();
	}

	render() {
		return (
			<div className="container">
				<NavBar location={this.props.location.pathname}/>
				<div>{this.props.children}</div>
				<AppLoader/>
			</div>
		);
	}
}

App.propTypes = {
	load: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {
		load: () => {
			dispatch(actions.load());
		},
		watchNetwork: () => {
			dispatch(actions.watchNetwork());
		}
	};
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(App);