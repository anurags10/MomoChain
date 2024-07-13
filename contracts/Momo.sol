// SPDX-License-Identifier: MIT
pragma solidity >0.7.0 <0.9.0;

contract Momo {
    struct Memo {
        string name;
        string message;
        uint timestamp;
        address from;
    }

    Memo [] memos;
    address payable owner;

    constructor() {
        owner = payable (msg.sender);
    }

    function buyMomo(string calldata name, string calldata message) external  payable {
        require(msg.value > 0 ether,"amount should be greater than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));
    }
    function getMemo() public view returns(Memo [] memory){
        return memos;
    }
    
}

