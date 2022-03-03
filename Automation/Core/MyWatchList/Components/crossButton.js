
async function crossButton(){
await page.waitForSelector('.watchlist-listing-container > .products-list > .row > .product-container:nth-child(2) > .position-absolute')
await page.click('.watchlist-listing-container > .products-list > .row > .product-container:nth-child(2) > .position-absolute')

await page.waitForSelector('.watchlist-listing-container > .products-list > .row > .product-container:nth-child(2) > .position-absolute')
await page.click('.watchlist-listing-container > .products-list > .row > .product-container:nth-child(2) > .position-absolute')

await browser.close()

}
crossButton();

