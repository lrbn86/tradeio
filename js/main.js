let portfolioValue = 400000;
let buyingPower = 400000;

const portfolioValueDisplay = document.querySelector('#portfolio-value');
const buyingPowerDisplay = document.querySelector('#buying-power');
const watchlistContainer = document.querySelector('#watchlist');
const displayContainer = document.querySelector('#display-container');
const stockInfoContainer = document.querySelector('#stock-info-container');

stockInfoContainer.style.display = "none";

document.addEventListener('click', (event) => {

  const watchListItem = event.target.closest('.watchlist-item');
  const backBtn = event.target.closest('#back-btn');
  const buyBtn = event.target.closest('#buy-btn');
  const sellBtn = event.target.closest('#sell-btn');

  if (watchListItem) {
    const stockObj = {
      "stockName": watchListItem.querySelector('.stock-name').textContent,
      "stockPrice": watchListItem.querySelector('.stock-price').textContent,
      "stockPriceDeltaPercentage": watchListItem.querySelector('.stock-percent').textContent,
      "stockShares": watchListItem.querySelector('.stock-shares').textContent
    };

    document.querySelector('#stock-name').textContent = stockObj.stockName;
    document.querySelector('#stock-price').textContent = stockObj.stockPrice;
    document.querySelector('#stock-percent').textContent = stockObj.stockPriceDeltaPercentage;
    document.querySelector('#stock-shares').textContent = stockObj.stockShares;

    stockInfoContainer.style.display = "block";
    watchlistContainer.style.display = "none";

  }

  if (backBtn) {
    watchlistContainer.style.display = "block";
    stockInfoContainer.style.display = "none";
  }

  if (buyBtn) {
    let stockPrice = document.querySelector('#stock-price');
    portfolioValueDisplay.textContent = stockPrice.textContent;
  }

  if (sellBtn) {
    let stockPrice = document.querySelector('#stock-price');
  }


});


