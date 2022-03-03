const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function downloadOutOfStockU(){
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
await page.waitForSelector('.bg-white > .row > .d-flex > .bg-transparent > .cursor-pointer')
await page.click('.bg-white > .row > .d-flex > .bg-transparent > .cursor-pointer')

await browser.close()
}
downloadOutOfStockU();
