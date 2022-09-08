/**
 * Schedules a command to click on this element.
 * @param {elementByLocator} str - Object Locator
 * @param {scrollToView} str - true or false
 * @return A promise that will be resolved when the click command has completed
 */
async function clickOnElement(elementByLocator, scrollToView = true) {
    const element = await this.find(elementByLocator)
    if (scrollToView) {
      try {
        await element.scrollIntoView()
      } catch (e) { }
    }
    return await element.click()
  }
  
  module.exports = clickOnElement