
async function retailerMW(){
await page.waitForSelector('.w-100 > .filter-names-container > .filter-name:nth-child(3) > .disp-flex > .fa-up-down')
await page.click('.w-100 > .filter-names-container > .filter-name:nth-child(3) > .disp-flex > .fa-up-down')

await page.waitForSelector('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(3) > .selected-count')
await page.click('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(3) > .selected-count')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(4) > .custom-radio > .label-radio')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(4) > .custom-radio > .label-radio')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > .label-radio')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > .label-radio')

await browser.close()
}
retailerMW();

