//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Sale} from "../Sale.sol";

contract ClassicSale is Sale {
    function mint(uint256 amount) external {
        _mint(msg.sender, amount);
    }

    function mintFor(address to, uint256 amount) external requiresAuth {
        _mint(to, amount);
    }
}
