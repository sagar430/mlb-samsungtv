/**
 * Locates elements that have a specific class name.
 * The returned locator is equivalent to searching for elements with the CSS selector ".clazz".
 * @param {className} str - The class name to search for.
 * @return !webdriver.Locator. The new locator.
 */
const getByClassName = className => `.${className}`

module.exports = getByClassName