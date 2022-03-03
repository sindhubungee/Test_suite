
async function outOfStockAAlarms(){ 

//Products out of stock
await page.waitForSelector('.margin-top-55 > .detail-selection:nth-child(4) > .simple-action-card:nth-child(3) > .hover > .event-on-text')
await page.click('.margin-top-55 > .detail-selection:nth-child(4) > .simple-action-card:nth-child(3) > .hover > .event-on-text')
await sleep(3000)
await page.waitForSelector('#page-layout > .brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center')
await page.click('#page-layout > .brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center')
await sleep(3000)
await page.waitForSelector('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await page.click('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await sleep(3000)

}

outOfStockAAlarms();