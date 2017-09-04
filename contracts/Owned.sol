pragma solidity ^0.4.4;

contract Owned {

	address public owner;

	modifier assertFromOwner {
		require(msg.sender == owner);
		_;
	}

	function Owned()
	public
	{
		owner = msg.sender;
	}

}