import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { AuctionsModule } from './auctions/auctions.module';
import { LotsModule } from './lots/lots.module';

@Module({
  imports: [DatabaseModule, AuctionsModule, LotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
