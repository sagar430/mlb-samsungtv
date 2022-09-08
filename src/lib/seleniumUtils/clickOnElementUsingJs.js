/**
 * Schedules a command to execute asynchronous JavaScript to click on this element.
 * @param {elementByLocator} str - Object Locator
 * @param {scrollToView} str - true or false
 * @return A promise that will be resolved when the click command has completed
 */
async function clickOnElementUsingJs(elementByLocator, scrollToView = false) {
    const element = await this.find(elementByLocator)
    if (scrollToView) {
      await element.scrollIntoView()
    }
    await browser.execute("arguments[0].click()", element)
  }
  
  module.exports = clickOnElementUsingJs