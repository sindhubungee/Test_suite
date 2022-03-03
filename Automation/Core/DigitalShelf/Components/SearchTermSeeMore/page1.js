
async function page1(){
await page.waitForSelector('.row > .search-product-card > .container-fluid > .header > .inactive:nth-child(4)')
await page.click('.row > .search-product-card > .container-fluid > .header > .inactive:nth-child(4)')

await browser.close()
}
page1();
