/**
 * Waits for DOM to finish rendering before searching for elements.
 * @param {elementByLocator} str - Object Locator
 * @return !webdriver.WebElementPromise,	A promise that will be resolved to the located webdriver.WebElement.
 */
async function find(elementByLocator){
    const timeoutMsg =
      "Wait Timeout Error for element - " + this.pageObjects[elementByLocator]
    const element = await $(this.pageObjects[elementByLocator])
    await element.waitForExist({ timeout: this.PAGELOAD_TIMEOUT, timeoutMsg })
    return element
  }
  
  module.exports = find