module.exports.loadPageRS = loadPageRS;
//const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary=require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function loadPageRS(){

    const puppeteer = require('puppeteer');
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
await page.waitForSelector('.nav-links-container > .navbar-links > .minimise-icons:nth-child(4) > a > .page-name')
await page.click('.nav-links-container > .navbar-links > .minimise-icons:nth-child(4) > a > .page-name')
await navigationPromise
await browser.close()
return page;
}
loadPageRS();

