
async function addSelectedProducts(){
  //click one product and click add button  
await page.waitForSelector('.col-xl-6:nth-child(1) > .competitive-product-container > .no-padding-l-r > .no-gutters > .no-padding-r > .custom-checkbox > input')
await page.click('.col-xl-6:nth-child(1) > .competitive-product-container > .no-padding-l-r > .no-gutters > .no-padding-r > .custom-checkbox > input')

await page.waitForSelector('.container-fluid > .border-left-light-grey > .selected-products-container > .add-product-container > .add-products-btn')
await page.click('.container-fluid > .border-left-light-grey > .selected-products-container > .add-product-container > .add-products-btn')

await browser.close()
}
addSelectedProducts();

