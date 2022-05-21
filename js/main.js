let portfolioValue = 400000;
let buyingPower = 400000;

const portfolioValueDisplay = document.querySelector('#portfolio-value');
const buyingPowerDisplay = document.querySelector('#buying-power');
const watchlistContainer = document.querySelector('#watchlist');
const stockInfoContainer = document.querySelector('#stock-info');

stockInfoContainer.style.display = "none";

document.addEventListener('click', (event) => {

  const watchListItem = event.target.closest('.watchlist-item');
  const backBtn = event.target.closest('#back-btn');
  const buyBtn = event.target.closest('#buy-btn');
  const sellBtn = event.target.closest('#sell-btn');

  let stockInfo;

  if (watchListItem) {
    stockInfo = {
      "stockName": watchListItem.childNodes[1].childNodes[1].textContent,
      "stockPrice": watchListItem.childNodes[3].childNodes[1].textContent,
      "stockPriceDeltaPercentage": watchListItem.childNodes[3].childNodes[3].textContent,
      "stockShares": watchListItem.childNodes[1].childNodes[3].textContent
    };
    stockInfoContainer.childNodes[3].textContent = stockInfo.stockName;
    stockInfoContainer.childNodes[5].textContent = stockInfo.stockPrice;
    stockInfoContainer.childNodes[7].textContent = stockInfo.stockPriceDeltaPercentage;
    stockInfoContainer.childNodes[9].textContent = stockInfo.stockShares;
    stockInfoContainer.style.display = "block";
    watchlistContainer.style.display = "none";

  }
  if (backBtn) {
    watchlistContainer.style.display = "block";
    stockInfoContainer.style.display = "none";
  }

  if (buyBtn) {
    console.log('BUY', stockInfo);

  }

  if (sellBtn) {
    console.log('SELL', stockInfo);
  }


});


