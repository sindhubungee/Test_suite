const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const puppeteer = require('puppeteer');
async function viewRetailer(){

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
sleep(3000)
//view retailer button
await page.waitForSelector('.row > .brand-container > .row > .details > .green-color-btn')
await page.click('.row > .brand-container > .row > .details > .green-color-btn')
sleep(3000)
//cross button on retailers
await page.waitForSelector('.modal-dialog > .modal-content > .modal-header > .close-btn > .small-btn')
await page.click('.modal-dialog > .modal-content > .modal-header > .close-btn > .small-btn')
sleep(3000)
await browser.close()
}
viewRetailer();

