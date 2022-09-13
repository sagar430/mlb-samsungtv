const { Given, When, Then } = require('@wdio/cucumber-framework');

Given('I go to the {string} page', async (site) => {
    if(site=="home"){
        await browser.url(`https://stg-wbd.mlb.com/html5/browser_browser_es5/home`)
    }
    else if(site=="games"){
        await browser.url(`/live-stream-games/`)
    }
    else if(site=="login"){
        await browser.url(`login?campaignCode=mp5&redirectUri=/tv`)
    }
    else{
        await browser.url(`/tv/${site}`)
   }
});