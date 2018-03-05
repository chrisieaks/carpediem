console.log('Keys module Loaded');

exports.weather = {
  api_key: process.env.Weather_ID
};

exports.nyt = {
  api_key: process.env.NYT_ID,
};

exports.stocks = {
    api_key: process.env.Stocks_ID
}