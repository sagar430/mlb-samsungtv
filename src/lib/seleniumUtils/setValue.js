/**
 * Schedules a command to click on this element.
 * @param {elementByLocator} str - Object Locator
 * @param {scrollToView} str - true or false
 * @return A promise that will be resolved when the click command has completed
 */
async function setValue(elementByLocator, text) {
    const element = await this.find(elementByLocator)
    return await element.setValue(text)
  }
  
  module.exports = setValue