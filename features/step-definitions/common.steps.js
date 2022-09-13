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
  await browser.pause(5000)
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

When('I go to Getmlbtv from Home', async function() {
  //up
  await browser.pause(5000)
  await browser.keys("\ue013")
  //right
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

When('I go to GetMlbTv from Home', async function() {
  //up
  await browser.pause(3000)
  await browser.keys("\ue013")
  //right
  await browser.pause(1000)
  await browser.keys("\ue014")
  await browser.pause(1000)
  await browser.keys("\ue014")
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
  await browser.pause(5000)
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
  await browser.pause(3000)
  await browser.keys("\ue007")
  await browser.pause(5000)
})

When('I press left key', async function() {
  //left
  await browser.pause(1000)
  await browser.keys("\ue012")
})

When('I press right key', async function() {
  //right
  await browser.pause(1000)
  await browser.keys("\ue014")
})

When('I press up key', async function() {
  //up
  await browser.pause(1000)
  await browser.keys("\ue013")
})

When('I wait for sometime', async function() {
  await browser.pause(3000)
})

When('I wait for some more time', async function() {
  await browser.pause(5000)
})

When('I select the {string} tab', async function(objectKey) {
  const page = await getPageObject(objectKey)
  await page.clickOnElement(objectKey, false)
})

When('I login using valid credentials', async function() {
  const page = await getPageObject('Username')
  await browser.pause(3000)
  await page.setValue('Username', await getPageObjectContent('Yearly User'))
  await page.setValue('password', await getPageObjectContent('password'))
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
})

When('I login using invalid credentials', async function() {
  const page = await getPageObject('Username')
  await browser.pause(3000)
  await page.setValue('Username', await getPageObjectContent('Loser User'))
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

When('I Verify Settings Hide Spoilers On Btn Is Selected', async function() {
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //wait for sometime
  await browser.pause(3000)
  //down
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return 
  await browser.pause(1000)
  await browser.keys("\ue006")
  //wait for sometime
  await browser.pause(3000)
  //up  
  await browser.pause(1000)
  await browser.keys("\ue013")
  //wait for sometime
  await browser.pause(3000)
  //verify on btn is selected on autoplay live content
  //couldn't do because don't know how to substitute {string} for my name below
  //And I wait for "VerifyHideSpoilersOnBtnIsSelected" to be displayed
})

When('I Verify Settings Autoplay Live Content Off Btn Is Selected', async function() {
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //up
  await browser.pause(3000)
  await browser.keys("\ue013")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //up
  await browser.pause(3000)
  await browser.keys("\ue013")
  await browser.pause(1000)
  await browser.keys("\ue013")
  //verify on btn is selected on autoplay live content
  //couldn't do because don't know how to substitute {string} for my name below
  //And I wait for "VerifyAutoplayLiveContentOnBtnIsSelected" to be displayed
})

When('I select Settings Get Mlb Tv', async function() {
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //wait
  await browser.pause(4000)
})

When('I select Settings Closed Captions', async function() {
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(3000)
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(1000)
  await browser.keys("\ue006")
  //wait
  await browser.pause(4000)
})

When('I select Settings Terms Of Service', async function() {
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(3000)
  await browser.keys("\ue006")
  await browser.pause(3000)  
})

When('I select Settings Contact Support', async function() {
  //down
  await browser.pause(3000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  await browser.pause(1000)
  await browser.keys("\ue015")
  //return
  await browser.pause(3000)
  await browser.keys("\ue006")
  await browser.pause(3000)  
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