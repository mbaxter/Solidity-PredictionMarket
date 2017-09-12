const web3 = require('../../eth/web3');
const Table = require('./Table');

const getQuestionTableColumns = ({ onClick }) => {
	return [
		{
			label: 'Description',
			value: 'description',
			action: onClick
		},
		{
			label: 'Status',
			value: (question) => {
				if (question.bettingIsOpen) {
					return 'Open';
				} else if (question.outcome) {
					return 'Resolved: No';
				} else {
					return 'Resolved: Yes';
				}
			}
		},
		{
			label: 'Total Bet (eth)',
			value: (question) => {
				const total = question.yesBetTotal + question.noBetTotal;
				return web3.fromWei(total, 'ether');
			}
		}
	];
};

const QuestionsList = ( { questions = [], onClick } ) => {

	const columns = getQuestionTableColumns( { onClick } );
	if (questions.length === 0) {
		return (<p>Watching for questions ...</p>);
	}
	return (<Table data={questions} columns={columns} />);
};

module.exports = QuestionsList;