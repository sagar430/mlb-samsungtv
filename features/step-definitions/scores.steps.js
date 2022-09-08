const { Given, When, Then } = require('@wdio/cucumber-framework');

import getPageObject from '../pageobjects/getObjects'

import {loginPage} from '../pageobjects/pageObjectDirectory'

const loginPageObject = new loginPage()

const loginToNativeAppFirstTime = async (string, cuEnv) => {
  
}

export default {
  loginToNativeAppFirstTime
}


