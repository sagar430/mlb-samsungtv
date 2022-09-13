import {locators,generic} from '../../../index'
const {getById, getByCss, getByXpath} = locators

const pageObjects = {

  //Home page games tiles
  'FirstGameTile': getByCss('#games-list >div:nth-child(1)'),
  'FeaturedOnMLBTVFirstTile': getByCss('#mlbtv-featured-svod-video-list-list>div:nth-child(1)'),
  'PlayLoudMLBTVFirstTile': getByCss('#play-loud-mlbtv-video-list-list>div:nth-child(1)'),
  'MLBDocumentariesFirstTile': getByCss('#mlb-documentaries-svod-video-list-list>div:nth-child(1)'),
  'MLBOriginalsFirstTile': getByCss('#mlb-tv-youtube-originals-video-list-list>div:nth-child(1)'),
  'TopPlaysAccrossMLBFirstTile': getByCss('#top-10-plays-of-the-week-video-list-list>div:nth-child(1)'),
  'MLBsCardedFirstTile': getByCss('#mlbs-carded-svod-video-list-list>div:nth-child(1)'),
  'BaseballZenFirstTile': getByCss('#baseball-zen-video-list-list>div:nth-child(1)'),
  'TopGamesOfFirstTile': getByCss('#mlb-tv-archived-games-video-list-list>div:nth-child(1)'),
  
  //lock icons
  'FirstGameTileLockIcon': getByCss("#games-list >div:nth-child(1) svg[class^='LockIcon']"),
  'FeaturedOnMLBTVFirstTileLockIcon': getByCss("#mlbtv-featured-svod-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'PlayLoudMLBTVFirstTileLockIcon': getByCss("#play-loud-mlbtv-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'MLBDocumentariesFirstTileLockIcon': getByCss("#mlb-documentaries-svod-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'MLBOriginalsFirstTileLockIcon': getByCss("#mlb-tv-youtube-originals-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'TopPlaysAccrossMLBFirstTileLockIcon': getByCss("#top-10-plays-of-the-week-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'MLBsCardedFirstTileLockIcon': getByCss("#mlbs-carded-svod-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'BaseballZenFirstTileLockIcon': getByCss("#baseball-zen-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  'TopGamesOfFirstTileLockIcon': getByCss("#mlb-tv-archived-games-video-list-list>div:nth-child(1) svg[class^='LockIcon']"),
  
  //Home Page Get Mlb Tv Btn
  'HomePageGetMlbTvBtn': getByXpath("//*[@id='paywall-button' and @aria-label='Get MLB.TV']"),
  
  //Settings Options
  'SettingsLogin': getByXpath("//*[@class='button settings-menu-button'] //*[text()='Log In']"),
  'VerifyLoginSuccessTxt': getByXpath("//*[@class='mlb-login-success-content'] //*[@class='mlb-login-message-container'] //*[@class='mlb-login-success-message' and text()='Successful Log In']"),
  'VerifyFavoriteTeamTxt': getByXpath("//*[@class='favorites-team-info'] //*[@class='favorites-team-info-team-name' and text()='Baltimore Orioles']"),
  'SettingsFavoriteTeam': getByXpath("//*[@class='button settings-menu-button'] //*[text()='Favorite Team']"),
  'SettingsFollowingTeam': getByXpath("//*[@class='button settings-menu-button'] //*[text()='Following Team']"),
  'VerifyFollowingTeamTxt':getByXpath("//*[@class='favorites-team-info'] //*[@class='favorites-team-info-team-name' and text()='Baltimore Orioles']"),
  'SettingsHideSpoilers':getByXpath("//*[contains(@aria-label, 'Hide Spoilers')] //*[text()='Hide Spoilers']"),
  'VerifyHideSpoilersOnBtnIsSelected':getByXpath("//*[@class='settings-menu-item-value' and text()='on']"),
  'SettingsAutoplayLiveContent':getByXpath("//*[contains(@aria-label, 'Autoplay Live Content')] //*[text()='Autoplay Live Content']"),
  'VerifyAutoplayLiveContentOffBtnIsSelected':getByXpath("//*[@class='settings-menu-item-value' and text()='off']"),
  'SettingsGetMlbTv':getByXpath("//*[@class='button settings-menu-button selected'] //*[text()='Get MLB.TV']"),
  'VerifyClosedCaptionsOnBtnIsSelected':getByXpath("//*[@class='settings-menu-item-value' and text()='on']"),
  'SettingsClosedCaptions':getByXpath("//*[contains(@aria-label, 'Closed Captions off. Enable to display closed captions during playback')] //*[text()='Closed Captions']"),
  'VerifyTermsOfServiceTxt': getByXpath("//*[@class='mlb-settings-info-wrapper'] //*[@class='mlb-settings-info-header' and text()='Terms of Service and Privacy Policy']"),
  'SettingsTermsOfService':getByXpath("//*[contains(@aria-label, 'Terms of Service and Privacy Policy')] //*[text()='Terms of Service and Privacy Policy']"),
  'VerifyContactSupportTxt': getByXpath("//*[@class='mlb-settings-info-wrapper'] //*[@class='mlb-settings-info-header' and text()='Contact Support']"),
  'SettingsContactSupport':getByXpath("//*[contains(@aria-label, 'Contact Support. .  , selectable')] //*[text()='Contact Support']"),
}

module.exports =  class homePage extends generic {
  constructor() {
    super(pageObjects)
  }
}
