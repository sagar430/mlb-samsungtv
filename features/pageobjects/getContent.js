import pageContentValues from '../pageContents/pageContentDirectory'

const getPageObjectContent = async (objectKey) => {
  let contentValue
  for (let key in pageContentValues) {
    if (Object.keys(pageContentValues[key]).includes(objectKey)) {
      contentValue = pageContentValues[key][objectKey]
      break
    }
  }
  return contentValue
}

export default {getPageObjectContent}.getPageObjectContent