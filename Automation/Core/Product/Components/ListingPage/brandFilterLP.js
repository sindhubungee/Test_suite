
await page.waitForSelector('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex')
await page.click('.filter-custom-drop-layout > .w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > li > .custom-radio > .label-radio')
await page.click('.drop-layout-container > .drop-layout-list-group > li > .custom-radio > .label-radio')

await page.waitForSelector('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > .label-radio')
await page.click('.drop-layout-container > .drop-layout-list-group > .active > .custom-radio > .label-radio')

await browser.close()
