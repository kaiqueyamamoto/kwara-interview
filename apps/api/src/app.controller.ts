import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuctionService } from '@kwara/db/dist/services/auction.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly auctionService: AuctionService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('auctions')
  getAuctions() {
    return this.auctionService.getAuctions();
  }
}
