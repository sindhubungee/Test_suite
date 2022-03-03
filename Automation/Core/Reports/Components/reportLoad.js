async function reportLoad(){
await page.waitForSelector('.nav-links-container > .navbar-links > .minimise-icons:nth-child(5) > a > .page-name')
await page.click('.nav-links-container > .navbar-links > .minimise-icons:nth-child(5) > a > .page-name')

await browser.close()
}
reportLoad();
