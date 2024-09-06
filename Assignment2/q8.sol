// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EventLogger {
    // Define an event for recording a transaction
    event TransactionRecorded(address indexed sender, address indexed recipient, uint amount, uint timestamp);

    // Define an event for public function calls
    event PublicFunctionCalled(address indexed caller, uint timestamp);

    // State variable to store the message
    string public message;

    // Function to set a new message
    function setMessage(string memory _message) public {
        message = _message;
        // Emitting event when message is set
        emit PublicFunctionCalled(msg.sender, block.timestamp);
    }

    // Function to record a new transaction
    function recordTransaction(address _recipient, uint _amount) public {
        // Emit the transaction recorded event
        emit TransactionRecorded(msg.sender, _recipient, _amount, block.timestamp);
    }
}
