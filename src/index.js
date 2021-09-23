const scraper = require('./components/scraper');
const cron = require('node-cron');

cron.schedule('30 16 * * *', () => {
  console.log("Running")
  scraper.getWebData()
});