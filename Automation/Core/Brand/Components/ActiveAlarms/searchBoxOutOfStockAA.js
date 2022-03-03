
async function searchBoxOutOfStockAA(){
await page.waitForSelector('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')
await page.click('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')

await page.waitForSelector('.sc-ieecCq > .table-header > .bg-white > .search-container > .small-btn')
await page.click('.sc-ieecCq > .table-header > .bg-white > .search-container > .small-btn')


await browser.close()
}
searchBoxOutOfStockAA();
