/**
 * Schedules a command to click on the element2 present in tool tip List.
 * This function can be used to click on element present in tool tip component
 * @param {elementByLocator1} str - Object Locator
 * @param {elementByLocator2} str - Object Locator
 * @return A promise that will be resolved when the click command has completed
 */
async function clickOnElementInToolTipList(elementByLocator1, elementByLocator2){
    const items = await this.findAll(elementByLocator1)
    return items.reduce(async (promiseChain, item) => {
      return promiseChain.then(async () => {
        await item.scrollToView()
        await item.waitForExist({ timeout: this.PAGELOAD_TIMEOUT })
        await this.mouseHover(item)
        await this.clickOnElement(elementByLocator2)
      })
    }, Promise.resolve())
  }
  
  module.exports = clickOnElementInToolTipList