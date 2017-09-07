const React = require('react');
const Loader = require('./Loader');

class App extends React.Component {
	render() {
		return (
			<div>
				Hello World!
				<Loader isEnabled={true}></Loader>
			</div>
		);
	}
}

App.propTypes = {

};

module.exports = App;