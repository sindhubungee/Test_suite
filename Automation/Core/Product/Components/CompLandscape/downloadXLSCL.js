
async function downloadXLSCL(){
await page.waitForSelector('.table-wrapper > .container > .product-head > .text-right > .show-alerts')
await page.click('.table-wrapper > .container > .product-head > .text-right > .show-alerts')

await page.waitForSelector('body > a')
await page.click('body > a')

await browser.close()
}
downloadXLSCL();
