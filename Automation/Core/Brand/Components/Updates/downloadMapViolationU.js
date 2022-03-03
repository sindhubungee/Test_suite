const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function downloadMapViolationU(){
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
await page.waitForSelector('.table-header > .bg-white > .row > .d-flex > .bg-transparent')
await page.click('.table-header > .bg-white > .row > .d-flex > .bg-transparent')

await browser.close()
}
downloadMapViolationU();
