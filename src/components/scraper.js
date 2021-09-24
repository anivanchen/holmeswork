function getWebData() {
  const config = require('../config/config');
  const cheerio = require('cheerio');
  const axios = require('axios');

  axios.get(config.website)
    .then((response) => {
      let $ = cheerio.load(response.data);
      var homework = $('h1:first').nextUntil('hr').text();

      if (homework.includes('Bring your paper results to class.')) {
        homework += '\nREMEMBER TO PRINT YOUR HOMEWORK'
      }
      
      const emailer = require('./emailer');
      emailer.sendEmail(homework);
    }).catch(function(error) {
      console.error(error);
    });
}

module.exports = { getWebData };