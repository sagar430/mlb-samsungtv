/**
 * Scroll the page to the coordiante of this element.
 * @param {elementByLocator} str - elementByLocator
 * @return A promise that will be resolved when the scroll is completed
 */
async function moveTo(elementByLocator){
    var element = await this.find(elementByLocator)
    await element.moveTo()
  }
  
  module.exports = moveTo