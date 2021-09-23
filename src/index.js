const scraper = require('./components/scraper');
const cron = require('node-cron');

cron.schedule('30 16 * * mon-fri', () => {
  console.log("running")
  scraper.getWebData()
});