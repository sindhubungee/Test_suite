const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const loadPageRS = require('../RetailerSelection/loadPageRS.js');
const retailerSelection= require('../RetailerSelection/retailerSelection.js')
const puppeteer = require('puppeteer');

async function seeMoreButton(){

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
      
await page.waitForSelector('.search-term-product:nth-child(2) > .box-shadow-grey-1 > .open-close-handler-row > .head > .d-flex > .see-more > .mw-20px')
await page.click('.search-term-product:nth-child(2) > .box-shadow-grey-1 > .open-close-handler-row > .head > .d-flex > .see-more > .mw-20px')

await browser.close()
}
seeMoreButton();
