const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function mapViolation(){
        
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
//this is see summary button
await page.waitForSelector('.row > .brand-container > .row > .details > .text-only-blue-btn')
await page.click('.row > .brand-container > .row > .details > .text-only-blue-btn')
await sleep(5000)


//   map violation functionality
await page.waitForSelector('.margin-top-55 > .detail-selection > .col-xl-4:nth-child(2) > .selection-box > .view')
await page.click('.margin-top-55 > .detail-selection > .col-xl-4:nth-child(2) > .selection-box > .view')

await page.waitForSelector('#row-0 > .sc-eCImPb > .sc-furwcr > svg > path:nth-child(1)')
await page.click('#row-0 > .sc-eCImPb > .sc-furwcr > svg > path:nth-child(1)')

await page.waitForSelector('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
await page.click('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')

await page.waitForSelector('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await page.click('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')

   
await navigationPromise

}
mapViolation();






