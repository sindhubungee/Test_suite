
async function top10(){
await page.waitForSelector('.row > .search-product-card > .container-fluid > .header > .inactive:nth-child(3)')
await page.click('.row > .search-product-card > .container-fluid > .header > .inactive:nth-child(3)')

await browser.close()
}
top10();

