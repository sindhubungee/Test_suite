
async function downloadOutOfstockAA(){
await page.waitForSelector('.bg-white > .row > .d-flex > .bg-transparent > .cursor-pointer')
await page.click('.bg-white > .row > .d-flex > .bg-transparent > .cursor-pointer')

await browser.close()
}
downloadOutOfstockAA();
