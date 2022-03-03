async function addToWatchListPL(){
await page.waitForSelector('.ignore > #header-container > .d-flex > div > .mr-3')
await page.click('.ignore > #header-container > .d-flex > div > .mr-3')

await browser.close()
}
addToWatchListPL();

