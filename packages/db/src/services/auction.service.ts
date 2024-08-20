import { Database, Schema } from "..";

export class AuctionService {
  constructor(private readonly db: Database<Schema>) {}
  
  async getAuctions() {
    return this.db.data.auctions
  }
}