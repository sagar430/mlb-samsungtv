/**
 * Schedules a command to clear browser cookies.
 * @return A promise that will be resolved when the operation is completed
 */
function deleteBrowserCookies() {browser.deleteAllCookies}

module.exports = deleteBrowserCookies