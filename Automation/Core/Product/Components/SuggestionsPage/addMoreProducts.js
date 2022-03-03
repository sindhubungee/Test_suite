async function addMoreProducts(){

    
await page.waitForSelector('.container > .product-head > .disp-flex > div > .add-pd')
await page.click('.container > .product-head > .disp-flex > div > .add-pd')

await browser.close()

}
addMoreProducts();
