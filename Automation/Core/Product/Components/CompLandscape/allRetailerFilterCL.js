async function allRetailerFilterCL(){
await page.waitForSelector('.css-1pahdxg-control > .css-1wy0on6 > .css-1gtu0rj-indicatorContainer > .css-8mmkcg > path')
await page.click('.css-1pahdxg-control > .css-1wy0on6 > .css-1gtu0rj-indicatorContainer > .css-8mmkcg > path')

await page.waitForSelector('#react-select-3-option-1')
await page.click('#react-select-3-option-1')

await browser.close()
}
allRetailerFilterCL();
