/**
 * Locates an element by its ID.
 * @param {id} str - The ID to search for.
 * @return !webdriver.Locator. The new locator.
 */
const getById = id => `#${id}`

module.exports = getById