export type Lot = {
  id: string
  auctionId: string
  title: string
  description: string
  startingPrice: number
  currentBid: number | null
  currentBidder: string | null
  endsAt: string
}