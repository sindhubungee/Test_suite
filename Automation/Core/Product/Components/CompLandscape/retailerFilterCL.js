
async function retailerFilterCL(){
//retailer filter in comp landscape

await page.waitForSelector('.w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex > .fa-up-down')
await page.click('.w-100 > .filter-names-container > .filter-name:nth-child(2) > .disp-flex > .fa-up-down')

await page.waitForSelector('.filter-display > .filter-custom-drop-layout > .selected-filters > .d-flex > .cross')
await page.click('.filter-display > .filter-custom-drop-layout > .selected-filters > .d-flex > .cross')

await browser.close()
}
retailerFilterCL();

