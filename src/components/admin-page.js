const React = require('react');
const ReactRedux = require('react-redux');
const actions = require('../actions');

class AdminPage extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		const descriptionText = "Enter a Yes/No question ...";
		return (
			<div>
				{/*<form className="form-group">*/}
				<h1>Add a new Question</h1>
				<div className="input-group">
					<input type="text" className="form-control" placeholder={descriptionText}
					       aria-label={descriptionText} onChange={(evt) => this.onDescriptionUpdate(evt)}/>
					<span className="input-group-btn">
				        <button className="btn btn-primary" type="button" onClick={(evt) => this.onSubmitQuestion(evt)}
				                disabled={!this.state.description}>Add Question</button>
				      </span>
				</div>
				{/*</form>*/}
			</div>
		);
	}

	onDescriptionUpdate(event) {
		const description = event.target.value;
		this.setState({ description });
	}

	onSubmitQuestion() {
		console.log('submit', this.state.description);
		this.props.addQuestion(this.state.description);
		this.setState({description: ''});
	}
}

const mapStateToProps = () => {
	return {

	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addQuestion: (description) => {
			dispatch(actions.addQuestion(description));
		}
	};
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(AdminPage);