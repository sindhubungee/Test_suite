
const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const puppeteer = require('puppeteer');
async function checkFilter(){
  
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
//brand filter arrow button
await page.waitForSelector('.w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex > .fa-up-down')
await page.click('.w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex > .fa-up-down')
sleep(3000)
//click on filter
await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li > .custom-radio > .label-radio')
await page.click('.drop-layout-container > .drop-layout-list-group > li > .custom-radio > .label-radio')
sleep(3000)
//remove the filter
await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > .label-radio')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > .label-radio')
sleep(3000)
console.log('Passed');
await browser.close()

}
checkFilter();
