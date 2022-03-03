const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const loadPageRS = require('../RetailerSelection/loadPageRS.js');
const retailerSelection= require('../RetailerSelection/retailerSelection.js')
const seeMoreButton = require('../SearchTermListing/seeMoreButton.js');
const puppeteer = require('puppeteer');

async function myProductsButton(){
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
      page = await seeMoreButton.seeMoreButton();

await page.waitForSelector('.row > .search-product-card > .container-fluid > .header > .inactive:nth-child(2)')
await page.click('.row > .search-product-card > .container-fluid > .header > .inactive:nth-child(2)')

await browser.close()
}
myProductsButton();
