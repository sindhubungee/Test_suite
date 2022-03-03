
await page.waitForSelector('.filter-display > .filter-custom-drop-layout > .w-100 > .search-container > .custom-input')
await page.click('.filter-display > .filter-custom-drop-layout > .w-100 > .search-container > .custom-input')

await page.waitForSelector('.filter-display > .filter-custom-drop-layout > .w-100 > .search-container > .small-btn')
await page.click('.filter-display > .filter-custom-drop-layout > .w-100 > .search-container > .small-btn')

await browser.close()
