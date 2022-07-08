//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {ClonesWithImmutableArgs} from "clones-with-immutable-args/ClonesWithImmutableArgs.sol";
import {RolesAuthority, Authority} from "@rari-capital/solmate/src/auth/authorities/RolesAuthority.sol";

contract SaleFactory is RolesAuthority(msg.sender, Authority(address(0))) {
    using ClonesWithImmutableArgs for address;

    event NewSale(address indexed implementation, address indexed clone);

    function deploy(address implementation, bytes memory data) external requiresAuth returns (address clone) {
        clone = implementation.clone(data);

        emit NewSale(implementation, clone);
    }
}
