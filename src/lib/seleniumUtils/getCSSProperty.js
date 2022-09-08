/**
 * Gets the computed style of an element. If the element inherits the named style from its parent, the parent will be queried for its value.
 * Where possible, color values will be converted to their hex representation (e.g. #00ff00 instead of rgb(0, 255, 0)).
 * @param {elementByLocator} str - Object Locator
 * @param {cssName} str - The names of the CSS style property to look up.
 * @return !webdriver.promise.Promise.<string>. A promise that will be resolved with the requested CSS value.
 */
async function getCSSProperty(elementByLocator, cssName) {
    const element = await this.find(elementByLocator)
    const cssProperty = await element.getCSSProperty("style")
    console.log("ACTUAL CSS: " + cssProperty)
    return cssProperty
  }
  
  module.exports = getCSSProperty