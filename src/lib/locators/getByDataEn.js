/**
 * Get element by data-en
 * @param {enId} str - Date-en of element.
 * @return Locator
 */
const getByDataEn = dataEn => `//*[@data-en="${dataEn}"]`

module.exports = getByDataEn