async function mailUpdateRetailer(){
await page.waitForSelector('.col-xl-3 > .css-b62m3t-container > .css-1pahdxg-control > .css-1d8n9bt > .css-ackcql')
await page.click('.col-xl-3 > .css-b62m3t-container > .css-1pahdxg-control > .css-1d8n9bt > .css-ackcql')

await page.waitForSelector('#react-select-14-option-0')
await page.click('#react-select-14-option-0')

await page.waitForSelector('.detail-selection > .simple-action-card > .detail-selection-td > .text-right > .btn:nth-child(2)')
await page.click('.detail-selection > .simple-action-card > .detail-selection-td > .text-right > .btn:nth-child(2)')

await browser.close()
}
mailUpdateRetailer();

