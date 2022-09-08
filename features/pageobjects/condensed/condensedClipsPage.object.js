import {locators,generic} from '../../../index'
import getByXpath from '../../../src/lib/locators/getByXpath'
const {getById, getByCss} = locators

const pageObjects = {
  'CondensedGameBtn': getByXpath("//*[@class='flex-columns-recap'] //button[@class='button feed-selector-archive-button selected'] //*[@class= 'feed-text' and text()='Recap']"),
  'CondensedClipsCCBtn': getByXpath('//*[@class="controls-top"] //button[contains(@class,"QuickActionsButton")] //*[contains(@class,"ClosedCaptionsText")]'),
  'CondensedClipsSlider': getByXpath('//*[contains(@class,"Controls")] //*[contains(@class,"ScrubberBar")] //*[contains(@class,"SeekIndicator")]'),
  
}

module.exports =  class condensedClipsPage extends generic {
  constructor() {
    super(pageObjects)
  }
}
