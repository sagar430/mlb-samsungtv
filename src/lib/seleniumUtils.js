class generic {
	constructor(pageObjects) {
		this.pageObjects = pageObjects
		this.PAGELOAD_TIMEOUT = 60000
	}
}

	generic.prototype.clickEachElement = require('./seleniumUtils/clickEachElement')
	generic.prototype.clickOnElement = require('./seleniumUtils/clickOnElement')
	generic.prototype.clickOnElementInToolTipList = require('./seleniumUtils/clickOnElementInToolTipList')
	generic.prototype.clickOnElementUsingJs = require('./seleniumUtils/clickOnElementUsingJs')
	generic.prototype.deleteBrowserCookies = require('./seleniumUtils/deleteBrowserCookies')
	generic.prototype.find = require('./seleniumUtils/find')
	generic.prototype.setValue = require('./seleniumUtils/setValue')
	generic.prototype.findAll = require('./seleniumUtils/findAll')
	generic.prototype.getText = require('./seleniumUtils/getText')
	generic.prototype.scrollToView = require('./seleniumUtils/scrollToView')
	generic.prototype.scrollToViewElement = require('./seleniumUtils/scrollToViewElement')
	generic.prototype.waitForElement = require('./seleniumUtils/waitForElement')
	generic.prototype.isElementPresent = require('./seleniumUtils/isElementPresent')

module.exports = generic
