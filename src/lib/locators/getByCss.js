// /**
//  * Locates elements using a CSS selector.
//  * For browsers that do not support CSS selectors, WebDriver implementations may return an invalid selector error.
//  * An implementation may, however, emulate the CSS selector API.
//  * @param {selector} str - The CSS selector to use.
//  * @return !webdriver.Locator. The new locator.
//  */
const getByCss = css => `${css}`

module.exports = getByCss