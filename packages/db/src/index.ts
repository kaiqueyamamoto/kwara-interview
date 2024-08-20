import { existsSync, readFileSync, writeFileSync } from 'fs'
import { Lot } from './entities/lot'
import { Auction } from './entities/auction'

export interface Schema {
  lots: Lot[]
  auctions: Auction[]
}

export class Database<TData> {
  public data: TData

  constructor(private readonly dbPath: string) {
    this.data = this.read()
  }

  public update = (data: Partial<TData>) =>
    (this.data = { ...this.data, ...data })

  public commit = () => this.persist(this.data)

  private persist = (data: TData) =>
    writeFileSync(this.dbPath, JSON.stringify(data))

  private read = (): TData =>
    JSON.parse(readFileSync(this.dbPath).toString()) as TData

  private load = (initial: TData): TData => {
    if (!existsSync(this.dbPath)) {
      this.persist(initial)
    }

    const current = this.read()

    return {
      ...initial,
      ...current,
    }
  }
}