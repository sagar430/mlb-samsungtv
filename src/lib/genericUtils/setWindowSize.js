/**
 * Resizes browser window outer size according to provided width and height.
 * @param {width} Number - browser will be resized to provided width
 * @param {height} Number - browser will be resized to provided height
 * @return !webdriver.promise.Promise.
 */
const setWindowSize = async (width, height) => {
    return browser.setWindowSize(width, height)
}

module.exports = setWindowSize