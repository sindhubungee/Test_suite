async function brandFilter(){
await page.waitForSelector('.w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex > .fa-up-down')
await page.click('.w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex > .fa-up-down')

await page.waitForSelector('.filter-custom-drop-layout > .drop-layout-container > .drop-layout-list-group > .active > .custom-radio')
await page.click('.filter-custom-drop-layout > .drop-layout-container > .drop-layout-list-group > .active > .custom-radio')

await page.waitForSelector('.filter-custom-drop-layout > .drop-layout-container > .drop-layout-list-group > .active > .custom-radio')
await page.click('.filter-custom-drop-layout > .drop-layout-container > .drop-layout-list-group > .active > .custom-radio')

await browser.close()
}
brandFilter();
