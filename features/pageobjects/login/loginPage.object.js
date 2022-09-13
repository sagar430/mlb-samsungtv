import {locators,generic} from '../../../index'
import getByCss from '../../../src/lib/locators/getByCss'


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

  'VerifyAccountAlreadyCreatedMsg': getByXpath("//*[@class='filler'] //*[@class='mlb-form-content'] //*[@class='mlb-form-error-message' and contains(text(), 'An account has already been created with that email address')]"),
  "VerifyAccountCreatedSuccesfullyMsg": getByXpath("//*[@class='filler'] //*[@class='mlb-create-account-success-content'] //*[@class='mlb-create-account-success-message' and text()='Your account was successfully created.']"),
  "VerifyInvalidPasswordMsg": getByXpath("//*[@class='filler'] //*[@class='mlb-form-content'] //*[@class='mlb-form-error-message' and text()='Please enter a valid password']"),
  "VerifyInvalidEmailMsg": getByXpath("//*[@class='filler'] //*[@class='mlb-form-content'] //*[@class='mlb-form-error-message' and text()='Please enter a valid email address']"),
  "VerifyCreateBtnIsHidden": getByXpath("//*[@class='mlb-form-button-container'] //*[@class='button mlb-form-button mlb-form-submit-button disabled'] //*[@aria-hidden='true' and text()='Create Account']"),
  "VerifyFirstFreeGameTile": getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row clearfix"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-banner tile-score-free-game-banner"]'),
  "GameFeedModalAwayTeam": getByCss('[class^="mlb-modal content"] [class^="feed-selector"] [class^="feed-selector-feeds"] [class="feed-select-header-main-container"] [class="feed-select-header-team away"]'),
  "GameFirstFreeTile": getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row clearfix"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) '),
}
module.exports = class loginPage extends generic {
  constructor() {
    super(pageObjects)
  }
}