/**
 * Schedules a command to compute the size of this element's bounding box, in pixels.
 * @return !webdriver.promise.Promise.<{width: number, height: number}>. A promise that will be resolved with the element's size as a {width:number, height:number} object.
 */
const getBrowserSize = async () => {
    const size = await browser.getWindowRect()
    console.log(" BROWSER SIZE " + JSON.stringify(size.width))
    return size.width
  }
  
  module.exports = getBrowserSize