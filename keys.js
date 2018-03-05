console.log('LIRI is working on it. Calm down');

exports.weather = {
  api_key: process.env.Weather_ID
};

exports.nyt = {
  api_key: process.env.NYT_ID,
};

exports.stocks = {
    api_key: process.env.Stocks_ID
}