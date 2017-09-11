pragma solidity ^0.4.4;

import "./Owned.sol";
import "./PredictionMarketQuestion.sol";

contract PredictionMarket is Owned {

    PredictionMarketQuestion[] public questions;
	mapping(address => bool) public trackedQuestions;
	uint public questionCount;
	mapping(address => bool) public trustedAuthorities;

	event LogQuestionAdded(address question, string description, uint questionCount);

	modifier assertFromTrustedAuthority() {
		require(trustedAuthorities[msg.sender]);
		_;
	}

	modifier assertTrackedQuestion(address question) {
		require(trackedQuestions[question]);
		_;
	}

	function addQuestion(string description)
		public
		assertFromOwner
		returns (uint totalQuestions)
	{
	    PredictionMarketQuestion question = new PredictionMarketQuestion(description);
		questions.push(question);
		trackedQuestions[question] = true;
		questionCount += 1;
		LogQuestionAdded(address(question), description, questionCount);
		return questionCount;
	}

	function addTrustedAuthority(address authority)
		public
		assertFromOwner
	{
		require(authority != 0x0);
		require(authority != address(this));
		require(!trackedQuestions[authority]);

		trustedAuthorities[authority] = true;
	}

	function resolveQuestion(PredictionMarketQuestion question, bool resolution)
		public
		assertFromTrustedAuthority
		assertTrackedQuestion(question)
	{
		question.settleOutcome(resolution);
	}

	// Disable fallback
	function() {
		assert(false);
	}
}