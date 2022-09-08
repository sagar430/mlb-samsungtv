/**
 * Find a button by text.
 * @param {searchText} str - button Text to search.
 * @return ProtractorLocator
 */
const getByButtonText = searchText => `//button[text()="${searchText}"]`

module.exports = getByButtonText