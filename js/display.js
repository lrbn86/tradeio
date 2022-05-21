export class Display {
  constructor() {
    this.portfolioValueDisplay = document.querySelector('#portfolio-value');
    this.buyingPowerDisplay = document.querySelector('#buying-power');
    this.watchlistDisplay = document.querySelector('#watchlist');
  }

  renderBuyingPower(user) {
    this.buyingPowerDisplay.textContent = user.buyingPower.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  renderPortfolioValue(user) {
    this.portfolioValueDisplay.textContent = user.portfolioValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  renderWatchlist(user) {
    let watchlistItem = ``;
    for (let stock of user.watchlist) {
      watchlistItem += `
        <div class='watchlist-item'>
          <p>${stock.ticker}</p>
          <p>${stock.price.toLocaleString('en-US', { style: 'currency', currency: 'USD'})}</p>
        </div>
      `
    }
    this.watchlistDisplay.innerHTML = watchlistItem;
  }
}
