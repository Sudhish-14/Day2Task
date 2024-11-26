import { chromium,test,expect } from "@playwright/test";

test('Fb Task',async()=>{
const browser=await chromium.launch({
    headless:false
})
const page=await browser.newPage();
await page.goto("https://www.chemistwarehouse.com.au/");
await page.getByRole('link', { name: 'CONTINUE' }).click();
const arr=[
  { selector:'',value:'sudhish'},
{selector:'',value:'sudhish@gmail.com'},
{selector:'',value:'9876543210'},
{selector:'',value:'47/19 7th street AE block anna nagar chennai'}];



})