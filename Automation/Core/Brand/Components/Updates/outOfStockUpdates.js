const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function outOfStockUpdates(){
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
await page.waitForSelector('.margin-top-55 > .detail-selection:nth-child(8) > .simple-action-card:nth-child(3) > .hover > .event-on-text')
await page.click('.margin-top-55 > .detail-selection:nth-child(8) > .simple-action-card:nth-child(3) > .hover > .event-on-text')

await page.waitForSelector('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
await page.click('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')

await page.waitForSelector('#row-0 > .sc-eCImPb > .sc-furwcr > svg > path:nth-child(1)')
await page.click('#row-0 > .sc-eCImPb > .sc-furwcr > svg > path:nth-child(1)')

await page.waitForSelector('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await page.click('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')

await browser.close()

}
outOfStockUpdates();