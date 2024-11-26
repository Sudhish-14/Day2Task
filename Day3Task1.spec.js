import {test,chromium,expect} from '@playwright/test';

test('Array Task',async()=>{
    const Browser=await chromium.launch({
        headless:false
    }
);
const page=await Browser.newPage();
await page.goto("https://testautomationpractice.blogspot.com/")


    // const arr=["Sudhish","sudhis@gmail.com","9876543210","no.19 7th street AE block Anna nagar chennai-635802"];
    const arr=[
      {locate:'input#name',value:'sudhish'},
      {locate:'input#email',value:'sudhish@gmail.com'},
      {locate:'input#phone',value:'9876543210'},
      {locate:'textarea#textarea',value:'47/19 7th street AE block anna nagar chennai'}];
      
    for(let e of arr){
        
        await page.locator(e.locate).fill(e.value);
        await page.waitForTimeout(2000)
    }
})
 
