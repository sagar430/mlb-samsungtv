/**
 * Gets the computed style of an element. If the element inherits the named style from its parent, the parent will be queried for its value.
 * Where possible, color values will be converted to their hex representation (e.g. #00ff00 instead of rgb(0, 255, 0)).
 * @param {elementByLocator} str - Object Locator
 * @param {cssName} str - The names of the CSS style property to look up.
 * @param {scrollToView} str - true or false
 * @return !webdriver.promise.Promise.<string>. A promise that will be resolved with the requested CSS value.
 */
async function getStyleValue(elementByLocator, cssName, scrollToView = false) {
    const element = await this.find(elementByLocator)
    if (scrollToView) {
      await element.scrollIntoView()
    }
    // had to use the below statement instead to be consistent with what protractor was returning.
    const actualCss = await browser.getElementCSSValue(element.elementId, cssName)
    console.log("ACTUAL CSS: " + actualCss)
    return actualCss
  }
  
  module.exports = getStyleValue