/**
 * Locates elements matching a XPath selector.
 * WebDriver will search from the document root regardless of whether the locator was used with a WebElement.
 * @param {xpath} str - The XPath selector to use.
 * @return !webdriver.Locator. The new locator.
 */
const getByXpath = xpath => xpath

module.exports = getByXpath