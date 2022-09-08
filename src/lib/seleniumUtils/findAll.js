/**
 * Waits for DOM to finish rendering before searching for elements.
 * @param {elementByLocator} str - Object Locator
 * @return !webdriver.promise.Promise,	A promise that will be resolved to an array of the located
 */
async function findAll(elementByLocator){
    const elements = await $$(this.pageObjects[elementByLocator])
    return elements
  }
  
  module.exports = findAll