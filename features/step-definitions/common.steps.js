const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'
import getPageObjectContent from '../pageobjects/getContent'



When('I click on {string}', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
  await browser.pause(5000)
})

When('I scroll on {string}', async function(objectKey) {
  const page = await getPageObject(objectKey)
  let isDisplayedInViewport = await $("//*[text()='Hot Stove']/..//li[1]").isDisplayedInViewport();
  console.log("Is Moga" + isDisplayedInViewport);
  await page.scrollToView(objectKey)
  // const Footer = $("//*[text()='Hot Stove']/..//li[1]");
  // scroll to specific element
  //await Footer.scrollIntoView();
  // await browser.execute(function() {
  //   document.querySelector("//*[text()='Hot Stove']/..//li[1]").scrollIntoView();
  // });
  //await browser.execute("window.scrollTo(0, document.body.scrollHeight)");
  await browser.pause(5000)
})

When('I displayed', async function() {
  await browser.pause(5000)
  let isDisplayedInViewport = await $("//*[text()='Featured on MLB.TV']/..//li[1]").isDisplayedInViewport();
  console.log("Is Moga" + isDisplayedInViewport);
  // await browser.keys("\uE015") 
  // await browser.keys("\uE015") 
  await browser.execute(function() {
    document.querySelector("#react-footer").scrollIntoView();
  });

  if(!isDisplayedInViewport){
    await browser.keys("\uE00F") 
    console.log("Is Moga2" + isDisplayedInViewport);
    isDisplayedInViewport = await $("//*[text()='Featured on MLB.TV']/..//li[1]").isDisplayedInViewport();
    await browser.keys("\uE00F") 
    console.log("Is Moga3" + isDisplayedInViewport);
    isDisplayedInViewport = await $("//*[text()='Featured on MLB.TV']/..//li[1]").isDisplayedInViewport();
    await browser.keys("\uE00F") 
    console.log("Is Moga4" + isDisplayedInViewport);
   
    isDisplayedInViewport = await $("//*[text()='Featured on MLB.TV']/..//li[1]").isDisplayedInViewport();
  }


  await browser.pause(5000)
  const element = await $("//*[text()='Featured on MLB.TV']/..//li[1]")
  // console.log("in view port", element.isDisplayedInViewport());
  await element.scrollIntoView();
  // console.log("in view port", element.isDisplayedInViewport());
  // element.waitForDisplayed();
  await element.click();
  await browser.pause(5000)
  // console.log("Is Moga" + isDisplayedInViewport);
})


When('I wait for {string} to be displayed', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.waitForElement(objectKey)
})

When('I press Enter', async function() {
  
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I press Back', async function() {
  
  //return
  await browser.pause(1000)
  await browser.keys("\ue003")
})

When('I go to Log In from Home', async function() {
  //up
  await browser.keys("\ue013")
  //right
  await browser.pause(1000)
  await browser.keys("\ue014")
  await browser.pause(1000)
  await browser.keys("\ue014")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I go to Games from Home', async function() {
  //up
  await browser.pause(3000)
  await browser.keys("\ue013")
  //right
  await browser.pause(1000)
  await browser.keys("\ue014")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  await browser.pause(5000)
})

When('I go to previous date from Games', async function() {
  //up
  await browser.pause(1000)
  await browser.keys("\ue013")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I go to next date from Games', async function() {
  //up
  await browser.pause(1000)
  await browser.keys("\ue013")
  //right
  await browser.pause(1000)
  await browser.keys("\ue014")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I go to Settings from Home', async function() {
  //up
  await browser.keys("\ue013")
  //right
  await browser.pause(1000)
  await browser.keys("\ue014")
  await browser.pause(1000)
  await browser.keys("\ue014")
  await browser.pause(1000)
  await browser.keys("\ue014")
  await browser.pause(1000)
  await browser.keys("\ue014")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

// When('I wait for sometime', async function() {
//   await browser.pause(5000)
// })

When('I select the {string} tab', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I login using valid credentials', async function() {
  const page = await getPageObject('Username')
  await page.setValue('Username', await getPageObjectContent('Yearly User'))
  await page.setValue('password', await getPageObjectContent('password'))
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I scroll down', async function (){
  await browser.execute('mobile: scroll', { 'direction': 'down'});
  await browser.execute("window.scrollTo(0, document.body.scrollHeight)");
})

When('I press down once', async function() {
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
})

When('I press down twice', async function() {
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.keys("\ue015")
})

When('I select GetMlbTvBtn', async function() {
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I select loginBtn', async function() {
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  await browser.pause(5000)
})

When('I select FirstGametile from Home', async function() {
  //down
  await browser.pause(5000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I select FirstMostpopulartile from Home', async function() {
  //down
  await browser.pause(5000)
  await browser.keys("\ue015")
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

Then('I should see {string} displayed', async function(objectKey) {
  const page = await getPageObject(objectKey)
  expect(await page.isElementPresent(objectKey)).to.be.true;
})