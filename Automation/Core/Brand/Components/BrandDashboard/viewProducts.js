
const loadBrandDashboard = require('../BrandDashboard/brandDashboard.js');
const puppeteer = require('puppeteer');

async function viewProducts(){
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
//view products button
await page.waitForSelector('.row > .brand-container > .row > .details > .dark-blue-btn')
await page.click('.row > .brand-container > .row > .details > .dark-blue-btn')
console.log('hit');
sleep(3000)
//await browser.close()
}
viewProducts();
