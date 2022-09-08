/**
 * Get the visible innerText of this element, including sub-elements, without any leading or trailing whitespace.
 * @param {elementByLocator} str - Object Locator
 * @param {scrollToView} str - true or false
 * @return !webdriver.promise.Promise.<string>. A promise that will be resolved with the element's visible text.
 */
async function getText(elementByLocator, scrollToView = false){
    var element = await this.find(elementByLocator)
    if (scrollToView) {
      await element.scrollIntoView()
    }
    const actualText = await element.getText()
    return actualText
  }

  module.exports = getText