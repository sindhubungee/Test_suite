const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function searchBoxOutOfStockU(){
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
      page=await brandSummary.loadBrandSummaryPage();
await page.waitForSelector('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')
await page.click('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')

await page.waitForSelector('.table-header > .bg-white > .search-container > .small-btn > img')
await page.click('.table-header > .bg-white > .search-container > .small-btn > img')

await browser.close()
}
searchBoxOutOfStockU();
