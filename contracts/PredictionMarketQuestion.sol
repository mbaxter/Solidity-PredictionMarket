pragma solidity ^0.4.4;

import "./Owned.sol";

contract PredictionMarketQuestion is Owned {

	// Custom data structures
	struct Bet {
		// True if outcome is expected to be positive
		bool prediction;
		uint amount;
	}

	// State variables
	string public description;
	bool public bettingIsOpen;
	mapping(address => Bet) public bets;
	uint public yesBetTotal;
	uint public noBetTotal;
	address[] betters;
	// True if outcome is positive
	bool public actualOutcome;
	// Leftover value when winnings do not divide evenly
	uint public remainder;

	event LogBet(address better, bool prediction, uint wager);

	// Modifiers
	modifier assertBettingIsOpen {
		require(bettingIsOpen);
		_;
	}
	modifier assertBettingIsClosed {
		require(!bettingIsOpen);
		_;
	}

	// Methods
	function PredictionMarketQuestion(string _description)
		public
	{
		description = _description;
		bettingIsOpen = true;
	}

	function betCount()
		public
		constant
		returns (uint count)
	{
		return betters.length;
	}

	function placeBet(bool _prediction)
		public
		payable
		assertBettingIsOpen
	{
		// Require a bet to be made
		require(msg.value > 0);
		// Cap individual bets
		require(msg.value < 10 ether);
		// Cap total investment
		require(totalContributions() + msg.value < 1000 ether);
		// Require that user hasn't already placed a bet
		require(bets[msg.sender].amount == 0);

		bets[msg.sender].prediction = _prediction;
		bets[msg.sender].amount = msg.value;
		betters.push(msg.sender);
	
		if (_prediction) {
			yesBetTotal += msg.value;
		} else {
			noBetTotal += msg.value;
		}

		LogBet(msg.sender, _prediction, msg.value);
	}

	function settleOutcome(bool _actualOutcome)
		public
		assertBettingIsOpen
		assertFromOwner
		returns (bool success)
	{
		actualOutcome = _actualOutcome;
		bettingIsOpen = false;
		return true;
	}

	function withdrawWinnings()
		public
		assertBettingIsClosed
		returns (bool success)
	{
		// Require a bet was made
		require(bets[msg.sender].amount > 0);
		// Require bet was correct
		require(bets[msg.sender].prediction == actualOutcome);

		// Calculate winnings
		uint contributions = totalContributions();
		uint numerator = bets[msg.sender].amount * contributions;
		assert(numerator / contributions == bets[msg.sender].amount);
		uint denominator = actualOutcome ? yesBetTotal : noBetTotal;
		uint winnings = numerator / denominator;
		// Move funds
		remainder += numerator % denominator;
		msg.sender.transfer(winnings);
		return true;
	}

	function withdrawRemainder()
		public
		assertFromOwner
		assertBettingIsClosed
		returns (bool success)
	{
		require(remainder > 0);

		uint amount = remainder;
		remainder = 0;
		owner.transfer(amount);
		return true;
	}

	function totalContributions()
		public
		constant
		returns (uint contributions)
	{
		return yesBetTotal + noBetTotal;
	}

	// Disable fallback
	function() {
		assert(false);
	}
}