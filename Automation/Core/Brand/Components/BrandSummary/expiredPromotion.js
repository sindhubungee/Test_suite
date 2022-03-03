const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const brandSummary = require('../BrandSummary/brandSummary.js');
const puppeteer = require('puppeteer');

async function expiredPromotion(){
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

//expired promotion button on summary page
await page.waitForSelector('.margin-top-55 > .detail-selection > .col-xl-4:nth-child(1) > .selection-box > .view')
await page.click('.margin-top-55 > .detail-selection > .col-xl-4:nth-child(1) > .selection-box > .view')
await sleep(3000)
 openFlag= await page.evaluate(()=>{
  if(document.querySelector('.sc-dlVxhl').innerText!="There are no records to display")
      return true;
  return false;
})
if(openFlag){
  await page.waitForSelector('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
  await page.click('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
  await sleep(3000)
  await page.waitForSelector('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
  await page.click('.sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr > svg')
  await sleep(3000)
  await page.waitForSelector('.sc-hGPBjI > #row-1 > .sc-eCImPb > .sc-furwcr > svg')
  await page.click('.sc-hGPBjI > #row-1 > .sc-eCImPb > .sc-furwcr > svg')
  await sleep(3000)
  await page.waitForSelector('.sc-hGPBjI > #row-1 > .sc-eCImPb > .sc-furwcr > svg')
  await page.click('.sc-hGPBjI > #row-1 > .sc-eCImPb > .sc-furwcr > svg')
  await sleep(3000)
}
//back button to summary page
await page.waitForSelector('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await page.click('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await sleep(3000)
    
await navigationPromise
await browser.close()
}
expiredPromotion();






