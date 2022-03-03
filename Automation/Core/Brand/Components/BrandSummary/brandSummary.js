
//const brandDashboard = require('../BrandDashboard/brandDashboard.js');
const puppeteer = require('puppeteer');
module.exports.loadBrandSummary = loadBrandSummary;

//click and load brandsummary 
async function loadBrandSummary(){
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
  //page=await brandDashboard.loadBrandDashboard();
  page=await brandSummary.loadBrandSummary();
//this is see summary button
await page.waitForSelector('.row > .brand-container > .row > .details > .text-only-blue-btn')
await page.click('.row > .brand-container > .row > .details > .text-only-blue-btn')
await sleep(3000)
await navigationPromise
return page;
   
  }
  loadBrandSummary();