//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;


contract MakeDonation {

    address contractOwner;
    
    address[] donatorAddrs;
    mapping(address => uint) donations;
    

    constructor () {
        contractOwner = msg.sender;
    }

    function owner() public view returns(address) {
        return contractOwner;
    }

    function getBalance() public view returns(uint){
        return address(this).balance;
    }

    function donate(uint _donationAmount) public payable {
        require(_donationAmount != 0, "Invalid amount of donation!");
        require(msg.value >= _donationAmount, "Error! Not enough tokens to transfer!");

        if(donations[msg.sender] == 0){
            donatorAddrs.push(msg.sender);
        }

        donations[msg.sender] += msg.value;
    }

    modifier ownerOnly {
        require(msg.sender == contractOwner, "Access denied!");
        _;
    }

    function withdraw(address payable receiverAddress, uint _withdrawAmount) public ownerOnly{
        require(address(this).balance >= _withdrawAmount, "Not enough tokens to proceed!");
        
        receiverAddress.transfer(_withdrawAmount); 
    }

    function getDonatorAddresses() public view returns(address[] memory) {
        return donatorAddrs;
    }

    function getDonationAmount(address _donatorAddr) public view returns(uint) {
        require(donations[_donatorAddr] > 0, "This address is not donor!");
        return donations[_donatorAddr];
    }

}