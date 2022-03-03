const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const loadPageRS = require('../RetailerSelection/loadPageRS.js');
const retailerSelection= require('../RetailerSelection/retailerSelection.js')
const puppeteer = require('puppeteer');

async function searchBoxRS(){
    const browser = await puppeteer.launch({
        headless: false,
      })
      let page = await browser.newPage()
      let navigationPromise = page.waitForNavigation()
      function sleep(ms) {
        return new Promise(resolve => {
          setTimeout(resolve, ms)
        })
      }
      page=await brandDashboard.loadBrandDashboard();  
      page = await loadPageRS.loadPageRS();
      page = await retailerSelection.retailerSelection();

await page.waitForSelector('.retailer-box > .align-all-items-center > .search-bar-container > .search-container > .custom-input')
await page.click('.retailer-box > .align-all-items-center > .search-bar-container > .search-container > .custom-input')

await page.waitForSelector('.retailer-box > .align-all-items-center > .search-bar-container > .search-container > .small-btn')
await page.click('.retailer-box > .align-all-items-center > .search-bar-container > .search-container > .small-btn')

await browser.close()
}
searchBoxRS();

