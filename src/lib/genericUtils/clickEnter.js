/**
 * Enter key is toggled (along with the appropriate keyup/down events).
 * @return A promise that will be resolved when the click command has completed
 */
const clickEnter = async (count = 1) => {
    for (let i = 0; i < count; i++) {
      await browser.keys('Enter')
    }
  }
  
  module.exports = clickEnter