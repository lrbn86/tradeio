export class User {
  constructor(buyingPower=100000) {
    this.buyingPower = buyingPower;
    this.portfolioValue = buyingPower;
    this.holdings = [];
    this.watchlist = [];
  }
}
