pragma solidity ^0.4.4;

import "./Owned.sol";
import "./PredictionMarketQuestion.sol";

contract PredictionMarket is Owned {
    PredictionMarketQuestion[] public questions;
	mapping(address => bool) public trackedQuestions;
	uint public questionCount;

	function addQuestion(string description, address trustedAuthority)
		public
		assertFromOwner
	{
	    PredictionMarketQuestion question = new PredictionMarketQuestion(description, trustedAuthority);
		questions.push(question);
		trackedQuestions[question] = true;
		questionCount += 1;
	}

	// Disable fallback
	function() {
		assert(false);
	}
}