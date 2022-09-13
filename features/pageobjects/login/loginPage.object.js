import {locators,generic} from '../../../index'


const {getById, getByValue, getByXpath, getByText} = locators

const pageObjects = { 
  'Sign in': getByXpath("//*[@data-testid='header-profile-button']"),
  'Profile': getByXpath("//*[@data-testid='header-profile-button']"),
  'Username': getById("email"),
  'Password': getById("password"),
  'Log In': getById("submit"),
  'Log Out': getByXpath("//button[contains(@class,'settings-menu-button')]//*[text()='Log Out']"),
  'Log Out2': getById("logout"),

  'Get Started': getByXpath("//button[contains(@class,'mlb-login-get-started-button')]"),

  'Terms of use': getByXpath("//*[contains(@class,'site-footer__legal-link') and text()='Terms of Use'] "),
  // 'carousel': getByXpath("//*[text()='Featured on MLB.TV']/..//li[1]"),
  'carousel': getById("react-footer"),

  'VerifyAccountCreatedMsg': getByXpath("//*[@class='filler'] //*[@class='mlb-form-content'] //*[@class='mlb-form-error-message' and contains(text(), 'An account has already been created with that email address')]"),
}
module.exports = class loginPage extends generic {
  constructor() {
    super(pageObjects)
  }
}