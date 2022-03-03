async function searchBoxS(){
await page.waitForSelector('.css-b62m3t-container > .css-1pahdxg-control > .css-1wy0on6 > .css-1gtu0rj-indicatorContainer > .css-8mmkcg')
await page.click('.css-b62m3t-container > .css-1pahdxg-control > .css-1wy0on6 > .css-1gtu0rj-indicatorContainer > .css-8mmkcg')

await page.waitForSelector('.css-b62m3t-container > .css-1pahdxg-control > .css-1wy0on6 > .css-1gtu0rj-indicatorContainer > .css-8mmkcg')
await page.click('.css-b62m3t-container > .css-1pahdxg-control > .css-1wy0on6 > .css-1gtu0rj-indicatorContainer > .css-8mmkcg')

await browser.close()
}
searchBoxS();

