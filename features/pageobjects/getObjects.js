import pageObjectValues from '../pageobjects/pageObjectDirectory'

const getPageObject = async (objectKey) => {
  let ObjecValue
  for (let key in pageObjectValues) {
    if (pageObjectValues[key].pageObjects.hasOwnProperty(objectKey)) {
      ObjecValue = pageObjectValues[key]
      break
    }
  }
  return ObjecValue
}

export default {getPageObject}.getPageObject
