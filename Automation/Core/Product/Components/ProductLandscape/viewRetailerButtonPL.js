async function viewRetailerButtonPL(){
await page.waitForSelector('.tab-detail-container > .col > .tab-detail:nth-child(1) > .text-uppercase > .view-retailer')
await page.click('.tab-detail-container > .col > .tab-detail:nth-child(1) > .text-uppercase > .view-retailer')

await page.waitForSelector('.modal-dialog > .modal-content > .modal-header > .close-btn > .small-btn')
await page.click('.modal-dialog > .modal-content > .modal-header > .close-btn > .small-btn')

await browser.close()
}
viewRetailerButtonPL();

