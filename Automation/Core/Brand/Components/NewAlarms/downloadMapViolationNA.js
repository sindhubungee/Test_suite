//const brandDashboard = require('../BrandDashboard/brandDashboard.js');
//const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');
async function downloadMapViolationNA(){
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
      //page=await brandDashboard.loadBrandDashboard();  
      page=await downloadMapViolationNA.downloadMapViolationNA();
  sleep(3000)   
await page.waitForSelector('.bg-white > .row > .d-flex > .bg-transparent > .cursor-pointer')
await page.click('.bg-white > .row > .d-flex > .bg-transparent > .cursor-pointer')
sleep(3000)   
await browser.close()
}
downloadMapViolationNA();
