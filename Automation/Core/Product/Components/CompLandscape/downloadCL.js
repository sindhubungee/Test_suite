async function downloadCL(){

   //download button in comp landscape 
await page.waitForSelector('#header-container > .d-flex > div > .download-screen-btn > .svg-inline--fa')
await page.click('#header-container > .d-flex > div > .download-screen-btn > .svg-inline--fa')


await browser.close()
}
downloadCL();
