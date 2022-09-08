import {locators,generic} from '../../../index'
import getByXpath from '../../../src/lib/locators/getByXpath'
const {getById, getByCss} = locators

const pageObjects = {

  'GamesTabSecondTile': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(2)'),

  //Recap Clips 
  'RecapBtn': getByXpath("//*[@class='flex-columns-recap'] //*[@class='button feed-selector-archive-button selected'] //*[@class='feed-text' and text()='Recap']"),
  'RecapClipsCCBtn': getByXpath('//*[@class="controls-top"] //button[contains(@class,"QuickActionsButton")] //*[contains(@class,"ClosedCaptionsText")]'),
  'RecapClipsSlider': getByXpath('//*[contains(@class,"Controls")] //*[contains(@class,"ScrubberBar")] //*[contains(@class,"SeekIndicator")]'),
  
}

module.exports =  class recapClipsPage extends generic {
  constructor() {
    super(pageObjects)
  }
}
