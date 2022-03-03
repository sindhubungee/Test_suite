
async function loadPagePL(){
//load product landscape page
await page.waitForSelector('.product-container:nth-child(2) > .position-relative > .wrapper-body > .product-body > .no-padding-l > .no-link-decor > .container > .pd-name')
await page.click('.product-container:nth-child(2) > .position-relative > .wrapper-body > .product-body > .no-padding-l > .no-link-decor > .container > .pd-name')

await browser.close()

}
loadPagePL();
