// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./IERC7007.sol";
import "./IVerifier.sol";

/**
 * @dev Implementation of the {IERC7007} interface.
 */
contract ERC7007Zkml is ERC721URIStorage {
    address public immutable verifier;

    /**
     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     */
    constructor(
        string memory name_,
        string memory symbol_,
        address verifier_
    ) ERC721(name_, symbol_) {
        verifier = verifier_;
    }

    event AigcDataAdded(uint256 indexed tokenId, bytes prompt, bytes aigcData, bytes proof);

    function mint(
        address to,
        bytes calldata prompt,
        bytes calldata aigcData,
        string calldata uri,
        bytes calldata proof
    ) public virtual returns (uint256 tokenId) {
        tokenId = uint256(keccak256(prompt));
        _safeMint(to, tokenId);
        addAigcData(tokenId, prompt, aigcData, proof);

        string memory tokenUri = string(
            abi.encodePacked(
                "{",
                uri,
                ', "prompt": "',
                string(prompt),
                '", "aigc_data": "',
                string(aigcData),
                '"}'
            )
        );
        _setTokenURI(tokenId, tokenUri);
    }

    /**
     * @dev See {IERC7007-addAigcData}.
     */
    function addAigcData(
        uint256 tokenId,
        bytes calldata prompt,
        bytes calldata aigcData,
        bytes calldata proof
    ) public virtual {
        require(ownerOf(tokenId) != address(0), "ERC7007: nonexistent token");
        require(verify(prompt, aigcData, proof), "ERC7007: invalid proof");
        emit AigcDataAdded(tokenId, prompt, aigcData, proof);
    }

    /**
     * @dev Verifies the proof and data.
     */
    function verify(
        bytes calldata prompt,
        bytes calldata aigcData,
        bytes calldata proof
    ) public view virtual returns (bool success) {
        return
            IVerifier(verifier).verifyProof(
                proof,
                abi.encodePacked(prompt, aigcData)
            );
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(
        bytes4 interfaceId
    ) public view virtual override returns (bool) {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC7007).interfaceId ||
            super.supportsInterface(interfaceId);
    }
}
