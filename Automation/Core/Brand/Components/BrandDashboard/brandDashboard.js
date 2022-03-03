//module.exports.loadBrandDashboard = loadBrandDashboard;
const loadPageS = require('../../../Sellers/Components/loadPageS.js')
async function loadBrandDashboard(){
     console.log('logged in');
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
        console.log('Hit');
    await page.goto('https://www.brandscape.bungeetech.com/')
        
    await page.waitForSelector('#email')
    await page.click('#email')
    await page.type('#email', 'demouser@halo.com')
    
    await page.waitForSelector('#password')
    await page.click('#password')
    await page.type('#password', 'Demo@2022')
    await sleep(3000)
        await page.evaluate(async () => {
          document.querySelector('button[class="btn btn-lg btn-block btn-primary mb-3"]').click();
      });
        //page = await brandSummary.loadBrandSummary();
   page = await brandDashboard.loadBrandDashboard();
          await navigationPromise
       loadPageS();   
    return page;
   }
   loadBrandDashboard();
//export default loadBrandDashboard;
