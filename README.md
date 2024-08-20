# Kwara Interview

## Setup

1. Setup pnpm

```bash
npm install -g pnpm
```

2. Install dependencies

```bash
pnpm install
```

3. Run the project

```bash
pnpm dev
```

## The Challenge

We are going to build a real-time auctions system. The system should have the following features:

- [ ] A user goes to / and sees a list auctions
- [ ] A user goes to /auction/:id and sees a list of lots in that auction
- [ ] Ask the user to enter their name (so we can identify them - this is the bidder)
- [ ] Each lot has a title, description, starting price, current bid and time remaining
- [ ] A user can bid on a lot and the bid is updated in real-time to all clients
- [ ] The auction should end once all lots time remaining is 0

## Data

We are going to use a JSON file to store the data. The file is located at `packages/db/resources/data.json`.
