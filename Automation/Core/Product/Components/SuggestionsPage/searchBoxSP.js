
async function searchBoxSP(){
await page.waitForSelector('.tab-data > .container-fluid > .search-bar-container > .search-container > .custom-input')
await page.click('.tab-data > .container-fluid > .search-bar-container > .search-container > .custom-input')

await page.waitForSelector('.container-fluid > .search-bar-container > .search-container > .small-btn > img')
await page.click('.container-fluid > .search-bar-container > .search-container > .small-btn > img')

await browser.close()
}
searchBoxSP();
