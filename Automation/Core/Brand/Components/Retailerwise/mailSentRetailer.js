async function mailSentRetailer(){
await page.waitForSelector('.detail-selection-td > .text-right > .btn:nth-child(2) > .svg-inline--fa > path')
await page.click('.detail-selection-td > .text-right > .btn:nth-child(2) > .svg-inline--fa > path')

await page.waitForSelector('.modal-dialog > .modal-content > .modal-body > .float-right > .btn')
await page.click('.modal-dialog > .modal-content > .modal-body > .float-right > .btn')

await browser.close()
}
mailSentRetailer();

