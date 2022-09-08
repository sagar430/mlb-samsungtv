/**
 * An expectation for checking that an element is present on the DOM of a page and the element is displayed.
 * @param {elementByLocator} str - Object Locator
 * @return !function. An expected condition that returns a promise representing whether the element is present and displayed.
 */
 async function isElementPresent (elementByLocator, bool){
  const element = await $(this.pageObjects[elementByLocator]);
  const foundElement = await element.isDisplayed();
  if (bool == true && foundElement == true) {
    console.log(elementByLocator + " is displayed as expected");
  }
  else if (bool == true && foundElement == false) {
    console.error(elementByLocator + " is unexpectedly not displayed");
  }
  else if (bool == false && foundElement == false) {
    console.log(elementByLocator + " is not displayed as expected");
  }
  else if (bool == false && foundElement == true) {
    console.log(elementByLocator + " is unexpectedly displayed");
  }
  return foundElement;
}

module.exports = isElementPresent