import { Module } from '@nestjs/common';
import { AuctionService } from '@kwara/db/dist/services/auction.service';
import { LotService } from '@kwara/db/dist/services/lot.service';
import { Database, Schema } from '@kwara/db/dist';

@Module({
  exports: [AuctionService, LotService],
  providers: [
    {
      provide: Database,
      useFactory: async () => {
        return new Database<Schema>('../../packages/db/resources/data.json');
      },
    },
    {
      provide: AuctionService,
      useFactory: async (db: Database<Schema>) => {
        return new AuctionService(db);
      },
      inject: [Database],
    },
    {
      provide: LotService,
      useFactory: async (db: Database<Schema>) => {
        return new LotService(db);
      },
      inject: [Database],
    },
  ],
})
export class DatabaseModule {}
