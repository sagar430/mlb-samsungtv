
/**
 * Schedules a command to click on list of elements.
 * @param {elementByLocator} str - Object Locator
 * @return A promise that will be resolved when the click command has completed
 */
async function clickEachElement(elementByLocator){
    const items = await this.findAll(elementByLocator)
    return items.reduce((promiseChain, item) => {
      return promiseChain.then(async () => {
        await item.waitForExist({ timeout: this.PAGELOAD_TIMEOUT })
        await item.click()
        await browser.pause(1000)
      })
    }, Promise.resolve())
  }
  
  module.exports = clickEachElement