
const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const puppeteer = require('puppeteer');
async function checkSearchBox(){

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
    sleep(3000);
    //click on search box
    await page.waitForSelector('.filter-display > .filter-custom-drop-layout > .w-100 > .search-container > .custom-input')
    await page.click('.filter-display > .filter-custom-drop-layout > .w-100 > .search-container > .custom-input')
    sleep(3000);
    //type something and check
    await page.waitForSelector('#text');
    await page.click('#text');
    await page.type('#text', 'test1234567890'); 
    //await page.type('#custom-input', 'test1234567890');
    sleep(3000);
    if(EventTarget('13')){
     console.log('pass');
    }
    
    sleep(3000);
    //click on cross button in search box
    await page.waitForSelector('.filter-custom-drop-layout > .w-100 > .search-container > .small-btn > img')
    await page.click('.filter-custom-drop-layout > .w-100 > .search-container > .small-btn > img')
    sleep(3000);
 
    //await browser.close()
        
    }
    checkSearchBox();
    