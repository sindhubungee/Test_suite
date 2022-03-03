const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const loadPageRS = require('../RetailerSelection/loadPageRS.js');
const puppeteer = require('puppeteer');

async function retailerSelection(){

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
  page = await loadPageRS.loadPageRS();
  
await page.waitForSelector('.row > .brand-container > .row > .details > .text-only-blue-btn')
  await page.click('.row > .brand-container > .row > .details > .text-only-blue-btn')
  await sleep(5000)
//digital shelf button
await page.waitForSelector('.nav-links-container > .navbar-links > .minimise-icons:nth-child(4) > a > .page-name')
await page.click('.nav-links-container > .navbar-links > .minimise-icons:nth-child(4) > a > .page-name')
await sleep(3000)
//clicking first retailer
await page.waitForSelector('div > .product-card > .wrapper-body > .product-body > .w-100')
await page.click('div > .product-card > .wrapper-body > .product-body > .w-100')
await sleep(3000)
//save selection
await page.waitForSelector('.modal-content > .modal-body > .filters-list > .custom-radio:nth-child(1) > .label-radio')
await page.click('.modal-content > .modal-body > .filters-list > .custom-radio:nth-child(1) > .label-radio')
await sleep(3000)
//back from first retailer
await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .footer > .done')
await page.click('.modal-dialog > .modal-content > .modal-body > .footer > .done')
await sleep(3000)
//clicking 2nd retailer
await page.waitForSelector('.retailer-box > .align-all-items-center > .retailer-selection-box > div > .selector')
await page.click('.retailer-box > .align-all-items-center > .retailer-selection-box > div > .selector')
await sleep(3000)
//save selection
await page.waitForSelector('.modal-content > .modal-body > .filters-list > .custom-radio:nth-child(2) > .label-radio')
await page.click('.modal-content > .modal-body > .filters-list > .custom-radio:nth-child(2) > .label-radio')
await sleep(3000)
//back from 2nd retailer
await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .footer > .done')
await page.click('.modal-dialog > .modal-content > .modal-body > .footer > .done')
await sleep(3000)
//clicking 3rd retailer
await page.waitForSelector('.retailer-box > .align-all-items-center > .retailer-selection-box > div > .selector')
await page.click('.retailer-box > .align-all-items-center > .retailer-selection-box > div > .selector')
await sleep(3000)
//save selection
await page.waitForSelector('.modal-content > .modal-body > .filters-list > .custom-radio:nth-child(3) > .label-radio')
await page.click('.modal-content > .modal-body > .filters-list > .custom-radio:nth-child(3) > .label-radio')
await sleep(3000)
//back from 3rd retailer
await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .footer > .done')
await page.click('.modal-dialog > .modal-content > .modal-body > .footer > .done')
await sleep(3000)
await browser.close()

}
retailerSelection();
