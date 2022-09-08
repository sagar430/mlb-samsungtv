/**
 * Get element by data-testid
 * @param {testid} str - Test Id of element.
 * @return Locator
 */
const getByDataTestId = (dataTestId, elementType = "") => {
    switch (elementType.toLowerCase()) {
      case "span":
        return `//*[@data-testid="${dataTestId}"]//span`
      case "button":
        return `//*[@data-testid="${dataTestId}"]//button`
      case "h1":
        return `//*[@data-testid="${dataTestId}"]//h1`
      case "h2":
        return `//*[@data-testid="${dataTestId}"]//h2`
      default:
        return `//*[@data-testid="${dataTestId}"]`
    }
  }
  
  module.exports = getByDataTestId