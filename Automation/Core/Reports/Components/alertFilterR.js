async function alertFilter(){
await page.waitForSelector('.w-100 > .filter-names-container > .filter-name:nth-child(4) > .disp-flex > .fa-up-down')
await page.click('.w-100 > .filter-names-container > .filter-name:nth-child(4) > .disp-flex > .fa-up-down')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(1) > .custom-checkbox > input')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(1) > .custom-checkbox > input')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > input')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > input')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(2) > .custom-checkbox > input')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(2) > .custom-checkbox > input')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > input')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > input')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(3) > .custom-checkbox > input')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(3) > .custom-checkbox > input')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > input')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > input')

await browser.close()
}
alertFilter();

