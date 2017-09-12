const ReactRedux = require('react-redux');
const React = require('react');
const selectors = require('../selectors');
const QuestionsList = require('./pure/questions-list');

class QuestionsPage extends React.Component {
	render() {
		return (
			<div>
				<QuestionsList questions={this.props.questions} onClick={(question) => this.onQuestionClick(question)}></QuestionsList>
			</div>
		);
	}

	onQuestionClick(question) {
		console.log('click question');
		console.log(question);
	}
}

const mapStateToProps = (state) => {
	return {
		questions: selectors.questionsList(state)
	};
};
const mapDispatchToProps = () => {
	return {};
};

module.exports = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(QuestionsList);