import { Database, Schema } from "..";
import { Lot } from "../entities/lot";

export class LotService {
  constructor(private readonly db: Database<Schema>) {}

  async createLot(lot: Lot) {
    this.db.update({
      lots: [...this.db.data.lots, lot],
    })

    this.db.commit()
  }

  async getLots() {
    return this.db.data.lots
  }
}