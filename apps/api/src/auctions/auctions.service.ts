import { Injectable } from '@nestjs/common';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';
import { Database, Schema } from '@kwara/db';

@Injectable()
export class AuctionsService {

  constructor(private readonly db:Database<Schema>){}

  create(createAuctionDto: CreateAuctionDto) {
    return 'This action adds a new auction';
  }

  async findAll() {
    const auctions = this.db.data;
    return auctions;
  }

  findOne(id: number) {
    return `This action returns a #${id} auction`;
  }

  update(id: number, updateAuctionDto: UpdateAuctionDto) {
    return `This action updates a #${id} auction`;
  }

  remove(id: number) {
    return `This action removes a #${id} auction`;
  }
}
