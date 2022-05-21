import { User } from './user.js';
import { Stock } from './stock.js';
import { StocksDatabase } from './stocks-database.js';
import { Display } from './display.js';

const stocksDatabase = new StocksDatabase();
const user = new User();

user.watchlist.push(new Stock('AMZN', stocksDatabase.list['AMZN']));
user.watchlist.push(new Stock('TSLA', stocksDatabase.list['TSLA']));
user.watchlist.push(new Stock('MSFT', stocksDatabase.list['MSFT']));
user.watchlist.push(new Stock('NFLX', stocksDatabase.list['NFLX']));

stocksDatabase.list['NFLX'] -= 5;

const UI = new Display();
UI.renderBuyingPower(user);
UI.renderPortfolioValue(user);
UI.renderWatchlist(user);
