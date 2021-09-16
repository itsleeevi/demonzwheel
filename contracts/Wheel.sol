/// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract Wheel is Ownable {

    using SafeMath for uint256;
    using Address for address;
 

    IERC20 internal _LLTH; // Instance of $LLTH token.

    uint256 public minMultiplier; // Minimum value of the wheel segment multiplier.
    uint256 public maxMultiplier; // Maximum value of the wheel segment multiplier.

    mapping(address => uint256) public bets; // Bets of players in current round.
    mapping(address => uint256) public multipliers; // Multiplier of players in current round.
    mapping(address => uint256) public _winningMultipliers; // Winning multipliers of each player.

    //-------------------------------------------------------------------------
    // CONSTRUCTOR
    //-------------------------------------------------------------------------

    constructor(address LLTH_) {
        _LLTH = IERC20(LLTH_);
    }

 
    //-------------------------------------------------------------------------
    // VIEW FUNCTIONS
    //-------------------------------------------------------------------------

    function getBalance() external view returns(uint256) {
        return _LLTH.balanceOf(address(this));
    }

    function winningMultiplierOf(address player) external view returns(uint256) {
        return _winningMultipliers[player];
    }
    //-------------------------------------------------------------------------
    // SET FUNCTIONS
    //-------------------------------------------------------------------------

    function setMinMultiplier(uint256 minMultiplier_) external onlyOwner() {
        minMultiplier = minMultiplier_;
    }

    function setMaxMultiplier(uint256 maxMultiplier_) external onlyOwner() {
        maxMultiplier = maxMultiplier_;
    }
  
    //-------------------------------------------------------------------------
    // INTERNAL FUNCTIONS 
    //-------------------------------------------------------------------------

    function random(uint256 mod) view internal returns(uint256) {
        uint256 randomNumber = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty))) % mod+1;
        if (randomNumber == 0){
            randomNumber += 2;
         }
         else if (randomNumber == 1) {
             randomNumber++;
         }
        return randomNumber; // 2-25
    }

    function getWinningMultiplier() internal view returns(uint256) {
        return random(25);
    }
 

    //-------------------------------------------------------------------------
    // EXTERNAL FUNCTIONS 
    //-------------------------------------------------------------------------

    // Called by front-end when placing bet. It saves player's data and tranfers their bet for this contract. 
    function placeBet(uint256 bet, uint256 multiplier) external {
        require(multiplier > 1);
        require(multiplier < 26);

        bets[msg.sender] = bet;
        multipliers[msg.sender] = multiplier;   
        _LLTH.transferFrom(msg.sender, address(this), bet);
        _winningMultipliers[msg.sender] = getWinningMultiplier();
    }

    function withdraw(uint256 amount) external onlyOwner() {
        require(_LLTH.balanceOf(address(this)) >= amount);
        _LLTH.transfer(owner(), amount);
    }

     // Transfers prize for winners, resets mappings and array.
    function closeRound(address player) external onlyOwner() {
        if (multipliers[player] == _winningMultipliers[player]) {
            uint256 amount = _winningMultipliers[player].mul(bets[player]);
            require(_LLTH.balanceOf(address(this)) >= amount);
            _LLTH.transfer(player, amount);
        }
            delete multipliers[player];
            delete bets[player];
            delete _winningMultipliers[player];
    }

}