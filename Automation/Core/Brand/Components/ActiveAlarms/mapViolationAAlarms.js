
async function mapViolationAAlarms(){ 

await page.waitForSelector('.margin-top-55 > .detail-selection:nth-child(4) > .simple-action-card:nth-child(2) > .hover > .event-on-text')
await page.click('.margin-top-55 > .detail-selection:nth-child(4) > .simple-action-card:nth-child(2) > .hover > .event-on-text')

await page.waitForSelector('.sc-gsDKAQ > .sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr')
await page.click('.sc-gsDKAQ > .sc-hGPBjI > #row-0 > .sc-eCImPb > .sc-furwcr')

await page.waitForSelector('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')
await page.click('.brand-summary-page > .margin-top-55 > .bg-white > .align-all-items-center > img')

await browser.close()
}
mapViolationAAlarms();
