import { chromium,test } from "@playwright/test";

test('Day3Task02',async()=>{
    const browser=await chromium.launch({
        headless:false
    });
    const page=await browser.newPage();
    await page.goto("https://www.chemistwarehouse.com.au/");
    await page.getByRole('link', { name: 'CONTINUE' }).click();
    
   const frag= await page.getByText('Fragrances');
   await frag.click();
    await page.waitForTimeout(3000)

console.log(await page.getByText('Fragrances'));
})