import { Module } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [AuctionsController],
  providers: [AuctionsService],
})
export class AuctionsModule {}
