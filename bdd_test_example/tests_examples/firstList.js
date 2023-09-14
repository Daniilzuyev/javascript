const puppeteer = require('puppeteer')
const expect = require('chai').expect

describe('first project', () => {
    it('launch browser', async () => {
        const browser = await puppeteer.launch({ headless: false, slowMo: 100 })
        const page = await browser.newPage()

        await page.setViewport({ width: 1920, height: 1080 })
        await page.goto("https://example.com/")

        const title = (await page.title()).toString();
        console.log(title)
        expect(title).equal("Example Domain")
        await browser.close()
    })

    it('check header on page', async () => {
        const browser = await puppeteer.launch({ headless: false, slowMo: 100 })
        const page = await browser.newPage()

        await page.setViewport({ width: 1920, height: 1080 })
        await page.goto("https://example.com/")

        const text = await page.evaluate((selector) => document.querySelector(selector).innerText, 'h1')

        expect(text).equal("Example Domain1")
        await browser.close()
    })
})
