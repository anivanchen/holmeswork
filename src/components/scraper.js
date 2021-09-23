function getWebData() {
  const config = require('../config/config');
  const axios = require('axios');

  axios.get(config.website)
    .then((response) => {

      const cheerio = require('cheerio');

      let $ = cheerio.load(response.data);
      var heading = $('h1').filter(function () {
        return $(this).text().trim().includes('hw');
      }).first().text()

      var elements = $('h1:first').nextUntil('hr').text();

      const emailer = require('./emailer');
      emailer.sendEmail(heading + '\n' + elements);

      }).catch(function(error) {
          console.error(error);
      });
}

module.exports = { getWebData };