/**
 * Used to switch WebDriver's focus to a alert window.
 * @return A promise that will be resolved when the alert has accepted
 */
const acceptAlert = async () => {
    await browser
      .switchTo()
      .alert()
      .accept()
  }
  
  module.exports = acceptAlert