
async function retailerFilterPL(){

//retailer filter in product landscape
await page.waitForSelector('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex')
await page.click('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > input')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > input')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(6) > .custom-radio > input')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(6) > .custom-radio > input')

await browser.close()
}
retailerFilterPL();

