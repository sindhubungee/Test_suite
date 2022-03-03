const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');
async function promotionNAlarms(){
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
sleep(3000)
await page.waitForSelector('.margin-top-55 > .detail-selection:nth-child(6) > .simple-action-card:nth-child(1) > .hover > .event-on-text')
await page.click('.margin-top-55 > .detail-selection:nth-child(6) > .simple-action-card:nth-child(1) > .hover > .event-on-text')
sleep(3000)
await page.waitForSelector('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
await page.click('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
sleep(3000)
await page.waitForSelector('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await page.click('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
sleep(3000)
await browser.close()
}
promotionNAlarms();