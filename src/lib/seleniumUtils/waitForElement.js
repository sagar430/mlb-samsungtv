/**
 * An expectation for checking that an element is present on the DOM of a page. This does not necessarily mean that the element is visible.
 * @param {elementByLocator1} str - Object Locator
 * @param {minutes} int - time in minutes
 * @return !function. An expected condition that returns a promise representing whether the element is present.
 */
async function waitForElement (elementByLocator, minutes = 1){
    const milliseconds = minutes * 60 * 1000
    var element = await this.find(elementByLocator)
    const foundElement = await element.waitForExist({ timeout: milliseconds })
    return foundElement
  }
  
  module.exports = waitForElement