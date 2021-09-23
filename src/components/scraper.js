function getWebData() {
  const config = require('../config/config');
  const cheerio = require('cheerio');
  const axios = require('axios');

  axios.get(config.website)
    .then((response) => {
      let $ = cheerio.load(response.data);
      var homework = $('h1:first').nextUntil('hr').text();
      const emailer = require('./emailer');
      emailer.sendEmail(homework);
    }).catch(function(error) {
      console.error(error);
    });
}

module.exports = { getWebData };