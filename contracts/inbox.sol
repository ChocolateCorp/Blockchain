pragma solidity ^0.4.0;
contract Inbox {

    string public message;
    function Inbox(string initialMessage) public {
        message = initialMessage;
    }
    
    function settMessage(string newMessage) public returns(string){
        message = newMessage;
        return message;
        
    }

}