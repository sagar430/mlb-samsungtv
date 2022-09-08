/**
 * Get element by textValue
 * @param {textValue} str - textValue of element.
 * @return Locator
 */
const getByText = textValue => `//*[text()="${textValue}"]`

module.exports = getByText