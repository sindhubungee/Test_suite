async function downloadPL(){
await page.waitForSelector('.d-flex > div > .download-screen-btn > .svg-inline--fa > path')
await page.click('.d-flex > div > .download-screen-btn > .svg-inline--fa > path')

await browser.close()
}
downloadPL();

