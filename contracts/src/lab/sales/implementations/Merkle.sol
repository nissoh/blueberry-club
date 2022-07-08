//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Sale} from "../Sale.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

struct Leaf {
    address receiver;
    uint96 nonce;
}

contract MerkleSale is Sale {
    function root() public pure returns (bytes32) {
        return bytes32(_getArgUint256(244));
    }

    mapping(bytes32 => bool) public leafClaimed;

    function hash(address receiver, uint96 nonce) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(receiver, nonce));
    }

    function hash(Leaf memory leaf) public pure returns (bytes32) {
        return keccak256(abi.encodePacked(leaf.receiver, leaf.nonce));
    }

    function mint(uint96 nonce, bytes32[] memory proof) external {
        _mint(Leaf(msg.sender, nonce), proof);
    }

    function mintFor(Leaf memory leaf, bytes32[] memory proof) external requiresAuth {
        _mint(leaf, proof);
    }

    function _mint(Leaf memory leaf, bytes32[] memory proof) internal {
        bytes32 leaf_ = hash(leaf);

        require(!leafClaimed[leaf_], "LEAF_USED");
        require(MerkleProof.verify(proof, root(), leaf_), "INVALID_LEAF");

        leafClaimed[leaf_] = true;

        _mint(leaf.receiver, 1);
    }
}
