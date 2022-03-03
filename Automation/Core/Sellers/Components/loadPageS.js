module.exports.loadPageS = loadPageS;
async function loadPageS(){
    const puppeteer = require('puppeteer');
        const browser = await puppeteer.launch({
          headless: false,
        })
        const page = await browser.newPage()
        const navigationPromise = page.waitForNavigation()
        function sleep(ms) {
          return new Promise(resolve => {
            setTimeout(resolve, ms)
          })
        }  
    
await page.waitForSelector('.nav-links-container > .navbar-links > .minimise-icons:nth-child(6) > a > .page-name')
await page.click('.nav-links-container > .navbar-links > .minimise-icons:nth-child(6) > a > .page-name')
//page = await loadPageS.loadPageS();
await browser.close()
}
//loadPageS();

