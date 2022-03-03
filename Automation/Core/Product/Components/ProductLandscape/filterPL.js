async function filterPL(){

//retailer wise product statistics filter
await page.waitForSelector('.container > .product-head > .text-right > .filter-custom > .filter-name')
await page.click('.container > .product-head > .text-right > .filter-custom > .filter-name')

await page.waitForSelector('.product-head > .text-right > .filter-custom > .list-group > .normal:nth-child(2)')
await page.click('.product-head > .text-right > .filter-custom > .list-group > .normal:nth-child(2)')

await page.waitForSelector('.container > .product-head > .text-right > .filter-custom > .filter-name')
await page.click('.container > .product-head > .text-right > .filter-custom > .filter-name')

await page.waitForSelector('.product-head > .text-right > .filter-custom > .list-group > .normal:nth-child(3)')
await page.click('.product-head > .text-right > .filter-custom > .list-group > .normal:nth-child(3)')

await page.waitForSelector('.container > .product-head > .text-right > .filter-custom > .filter-name')
await page.click('.container > .product-head > .text-right > .filter-custom > .filter-name')

await page.waitForSelector('.product-head > .text-right > .filter-custom > .list-group > .normal:nth-child(1)')
await page.click('.product-head > .text-right > .filter-custom > .list-group > .normal:nth-child(1)')

await browser.close()
}
filterPL();
