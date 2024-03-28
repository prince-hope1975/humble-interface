// db.ts
import Dexie from "dexie";

const dexDb = new Dexie("dexDatabase");

dexDb.version(1).stores({
  tokens: "tokenId, name, symbol, decimals, totalSupply",
  pools: "txId, round, ts, poolId, tokA, tokB",
});

//const mpDb = new Dexie("mpDatabase");

// mpDb.version(1).stores({
//   sales: "pk, mpContractId, mpListingId, tokenId, seller, buyer, currency, price, round, timestamp, collectionId",
//   collections: "pk, contractId, totalSupply, isBlacklisted, mintRound",
//   tokens: "pk, owner, approved, tokenId, contractId, mintRound, metadataURI, metadata",
// ListId, CollectionId, TokenId, ListAddr, ListPrice, EndTime, Royalties
//listings:
//  "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, endT, roy",
// BuyEvent: [UInt256, Address], // ListId BuyAddr
//sales: "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, bAddr",
//sales: "pk, mp, txId, round, timestamp, lId",
// ClaimEvent: [UInt256], // ListId
//claims: "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, bAddr",
//claims: "pk, mp, txId, round, timestamp, lId",
// DeleteListingEvent: [UInt256], // ListId
//deletions: "pk, mp, txId, round, timestamp, lId",
// AuctionEvent: [UInt256, Contract, UInt256, Address, Price, UInt], // AuctionId, CollectionId, TokenId, ListAddr, ListPrice, EndTime
//auctions:
//  "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, endTime",
// BidEvent: [UInt256, Address, Price], // AuctionId, BidAddr, BidPrice
//bids: "pk, mp, txId, round, timestamp, lId, bAddr, bPrc",
// DeleteAuctionEvent: [UInt256], // AuctionId
//auctionDeletions: "pk, mp, txId, round, timestamp, lId",
// ReverseListEvent: [
//   UInt256,
//   Contract,
//   UInt256,
//   Address,
//   Price,
//   Price,
//   UInt,
// ], // ListId, CollectionId, TokenId, ListAddr, ListPrice, FloorPrice, EndTime
//reverseListings:
//  "pk, mp, txId, round, timestamp, lId, cId, tId, lAddr, lPrc, fPrc, endTime",
//});

//export default mpDb;

export default dexDb;
