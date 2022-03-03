

async function searchBoxPromotion(){
await page.waitForSelector('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')
await page.click('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')

await page.waitForSelector('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')
await page.click('.sc-ieecCq > .table-header > .bg-white > .search-container > .custom-input')

await page.waitForSelector('.table-header > .bg-white > .search-container > .small-btn > img')
await page.click('.table-header > .bg-white > .search-container > .small-btn > img')

await browser.close()
}
searchBoxPromotion();
