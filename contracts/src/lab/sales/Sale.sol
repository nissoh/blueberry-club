//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Clone} from "clones-with-immutable-args/Clone.sol";

import {GBCLab} from "../Lab.sol";

import {ERC20} from "@rari-capital/solmate/src/tokens/ERC20.sol";
import {SafeTransferLib} from "@rari-capital/solmate/src/utils/SafeTransferLib.sol";
import {Authority} from "@rari-capital/solmate/src/auth/Auth.sol";

abstract contract Sale is Clone {
    using SafeTransferLib for ERC20;

    GBCLab public constant LAB = GBCLab(0xF4f935F4272e6FD9C779cF0036589A63b48d77A7);
    Authority public constant POLICE = Authority(0x575F40E8422EfA696108dAFD12cD8d6366982416);
    address public constant TREASURY = 0xDe2DBb7f1C893Cc5E2f51CbFd2A73C8a016183a0;

    function price() public pure returns (uint256) {
        return _getArgUint256(0);
    }

    function supply() public pure returns (uint256) {
        return _getArgUint256(32);
    }

    function wallet() public pure returns (uint256) {
        return _getArgUint256(64);
    }

    function transaction() public pure returns (uint256) {
        return _getArgUint256(96);
    }

    function start() public pure returns (uint256) {
        return _getArgUint256(128);
    }

    function end() public pure returns (uint256) {
        return _getArgUint256(160);
    }

    function tokenId() public pure returns (uint256) {
        return _getArgUint256(192);
    }

    function currency() public pure returns (ERC20) {
        return ERC20(_getArgAddress(224));
    }

    modifier requiresAuth() virtual {
        require(POLICE.canCall(msg.sender, address(this), msg.sig), "UNAUTHORIZED");
        _;
    }

    mapping(address => uint256) public minted;

    uint256 public totalMinted;

    function _mint(address to, uint256 amount) internal {
        require(amount <= transaction(), "MAX_TRANSACTION");
        uint256 totalMinted_ = totalMinted + amount;
        require(totalMinted_ <= supply(), "MAX_SUPPLY");
        uint256 minted_ = minted[to] + amount;
        require(minted_ <= wallet(), "MAX_WALLET");
        require(block.timestamp >= start(), "NOT_STARTED");
        require(block.timestamp < end(), "FINISHED");

        totalMinted = totalMinted_;
        minted[to] = minted_;

        ERC20 currency_ = currency();

        if (address(currency_) == address(0)) {
            SafeTransferLib.safeTransferETH(TREASURY, amount * price());
        } else {
            currency_.safeTransferFrom(msg.sender, TREASURY, amount * price());
        }

        LAB.mint(to, tokenId(), amount, "");
    }
}
