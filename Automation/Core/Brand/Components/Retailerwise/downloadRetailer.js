

async function downloadRetailer(){

await page.waitForSelector('.simple-action-card > .detail-selection-td:nth-child(2) > .text-right > .btn > .svg-inline--fa')
await page.click('.simple-action-card > .detail-selection-td:nth-child(2) > .text-right > .btn > .svg-inline--fa')

await browser.close()
}
downloadRetailer();
