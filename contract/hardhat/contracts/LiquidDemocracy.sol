// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract LiquidDemocracy {
    struct Voter {
        bool voted;
        address delegate;
        uint weight;
    }

    mapping(address => Voter) public voters;
    mapping(uint => uint) public votes;
    address public owner;
    uint public proposalCount;

    event Voted(address indexed voter, uint proposal);
    event Delegated(address indexed from, address indexed to);

    constructor(uint _proposalCount) {
        owner = msg.sender;
        proposalCount = _proposalCount;
    }

    function vote(uint proposal) public {
        require(proposal < proposalCount, "Invalid proposal");
        Voter storage sender = voters[msg.sender];
        require(!sender.voted, "Already voted");
        
        sender.voted = true;
        votes[proposal] += sender.weight + 1;
        emit Voted(msg.sender, proposal);
    }

    function delegate(address to) public {
        require(to != msg.sender, "Cannot delegate to yourself");
        require(!voters[msg.sender].voted, "Already voted");
        
        Voter storage sender = voters[msg.sender];
        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;
            require(to != msg.sender, "Delegation loop detected");
        }
        
        sender.voted = true;
        sender.delegate = to;
        voters[to].weight += sender.weight + 1;
        emit Delegated(msg.sender, to);
    }

    function getVotes(uint proposal) public view returns (uint) {
        require(proposal < proposalCount, "Invalid proposal");
        return votes[proposal];
    }
}
