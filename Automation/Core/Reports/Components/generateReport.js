
async function generateReport(){
await page.waitForSelector('.report-table > .sc-fFeiMQ > .sc-ieecCq > .filters > .capsule')
await page.click('.report-table > .sc-fFeiMQ > .sc-ieecCq > .filters > .capsule')

await browser.close()
}
generateReport();
