
async function alertFilterMW(){
await page.waitForSelector('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(4) > .selected-count')
await page.click('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(4) > .selected-count')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(1) > .custom-checkbox > .label-checkbox')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(1) > .custom-checkbox > .label-checkbox')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > .label-checkbox')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-checkbox > .label-checkbox')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li:nth-child(1) > .custom-checkbox > .label-checkbox')
await page.click('.drop-layout-container > .drop-layout-list-group > li:nth-child(1) > .custom-checkbox > .label-checkbox')

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
alertFilterMW();

