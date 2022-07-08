//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Sale} from "../Sale.sol";

import {ERC721} from "@rari-capital/solmate/src/tokens/ERC721.sol";

contract HolderSale is Sale {
    function collection() public pure returns (ERC721) {
        return ERC721(_getArgAddress(244));
    }

    mapping(uint256 => bool) public isNftUsed;

    function mint(uint256[] memory tokens) external {
        _mint(msg.sender, tokens);
    }

    function mintFor(address to, uint256[] memory tokens) external requiresAuth {
        _mint(to, tokens);
    }

    function _mint(address to, uint256[] memory tokens) internal {
        uint256 amount = tokens.length;

        ERC721 collection_ = collection();

        for (uint256 i = 0; i < tokens.length; ) {
            uint256 token = tokens[i];
            require(collection_.ownerOf(token) == to, "NOT_OWNER");
            require(!isNftUsed[token], "NFT_USED");

            isNftUsed[token] = true;

            unchecked {
                i++;
            }
        }

        _mint(to, amount);
    }
}
