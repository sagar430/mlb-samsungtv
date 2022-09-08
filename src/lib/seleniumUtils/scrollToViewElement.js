/**
 * Scroll the page to the coordiante of this element.
 * @param {element} str - element
 * @return A promise that will be resolved when the scroll is completed
 */
async function scrollToViewElement(elementByLocator){
    const element = await this.find(elementByLocator)
    return await browser.execute("arguments[0].scrollIntoView();", element)
  }
  
  module.exports = scrollToViewElement