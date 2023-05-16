// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

interface ISkateContractV2AuctionHouseV2 {
    struct Auction {
        // ID for the Gnar (ERC721 token ID)
        uint256 gnarId;
        // The current highest bid amount
        uint256 amount;
        // The timestamp the auction started
        uint256 startTimestamp;
        // The timestamp the auction is scheduled to end
        uint256 endTimestamp;
        // The address of the current highest bid
        address payable bidder;
        // Skate percentage
        uint8 skatePercent;
        // Dao percentage
        uint8 daoPercent;
        // Whether or not the auction has been settled
        bool settled;
    }

    event AuctionCreated(
        uint256 indexed gnarId,
        uint256 startTimestamp,
        uint256 endTimestamp,
        uint256 timestamp
    );

    event AuctionBid(
        uint256 indexed gnarId,
        address sender,
        uint256 value,
        uint256 timestamp
    );

    event AuctionSettled(
        uint256 indexed gnarId,
        address winner,
        uint256 amount,
        uint256 timestamp
    );

    event AuctionReservePriceUpdated(uint256 reservePrice);

    event AuctionMinBidIncrementPercentageUpdated(
        uint256 minBidIncrementPercentage
    );

    event SkateDaoAddressesUpdated(address skate, address dao);

    // AuctionHouseV2 Events

    event AuctionExtended(uint256 indexed gnarId, uint256 endTime);

    event AuctionTimeBufferUpdated(uint256 timeBuffer);

    event OGGnarClaimed(uint256 indexed ogGnarId, uint256 timestamp);

    function settleAuction() external;

    function settleCurrentAndCreateNewAuction() external;

    function createBid(
        uint256 gnarId,
        uint8 skatePercent,
        uint8 daoPercent
    ) external payable;

    function pause() external;

    function unpause() external;

    function setReservePrice(uint256 reservePrice) external;

    function setMinBidIncrementPercentage(
        uint8 minBidIncrementPercentage
    ) external;

    function setSkateDaoAddresses(address skate, address dao) external;

    function remainingTime() external view returns (uint256);

    // AuctionHouseV2 methods

    function setTimeBuffer(uint256 timeBuffer) external;

    function claimGnars(uint256[] calldata ogGnarIds) external;
}

contract BlockProtect {
    function settleAuction(
        address _auctionHouseAddress,
        uint256 expectedBlock
    ) external payable {
        require(
            block.number == expectedBlock,
            "Block missed: desired Gnar expired."
        );

        ISkateContractV2AuctionHouseV2(_auctionHouseAddress)
            .settleCurrentAndCreateNewAuction();
    }
}
