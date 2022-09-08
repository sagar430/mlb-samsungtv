import {locators,generic} from '../../../index'
import getByXpath from '../../../src/lib/locators/getByXpath'
const {getById, getByCss} = locators

const pageObjects = {

  //Games Feed Modal September 7 Too Early Modal
  'GamesFeedModal': getByCss('[class^="feed-selector-feeds"]'),
  'GamesFeedModalTodayEarlyAwayTeamLogo': getByCss('[class^="feed-selector-feeds"] [class^="feed-select-header-main-container"] [class^="feed-select-header-team away"]'),
  'GamesFeedModalTodayEarlyHomeTeamLogo': getByCss('[class^="feed-selector-feeds"] [class^="feed-select-header-main-container"] [class^="feed-select-header-team home"]'),
  'GamesFeedModalTodayEarlySignalIcon': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='SignalIcon-sc-1y5ug8c-0 ddRjdt no-feeds-icon']"),
  'GamesFeedModalTodayEarlyYoureEarlyMsg': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='no-feeds-early' and contains(text(), 'a bit early!')]"),
  'GamesFeedModalTodayEarlyNoFeedsTxt': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='no-feeds-text' and contains(text(), 'There are no feeds available yet')]"),

  //Games Feed Modal September 7 Free Game of Day Modal
  'GamesFeedModalTodayFreeAwayTeamLogo': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-header-main-container'] //*[@class='feed-select-header-team away']"),
  'GamesFeedModalTodayFreeHomeTeamLogo': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-header-main-container'] //*[@class='feed-select-header-team home']"),
  'GamesFeedModalTodayFreeGameTitle': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='feed-free-title' and text()='MLB Free Game of the Day']"),
  'GamesFeedModalTodayFreeDescription': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='feed-free-description' and contains(text(), 'Free Game of the Day by logging in')]"),
  'GamesFeedModalTodayFreeFullAccessLabel': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='media-type-label' and text()='Full Game Access']"),
  'GamesFeedModalTodayFreeCreateAccountBtn': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //button//*[@class='feed-text' and text()='Create Free Account']"),
  'GamesFeedModalTodayFreeLoginBtn': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //button//*[@class='feed-text' and text()='Login']"),
  
  
  //Games Feed Modal September 6
  'GamesFeedModalYesterday': getByCss('[class^="feed-selector-feeds"]'),
  'GamesFeedModalYesterdayAwayTeamLogo': getByCss('[class^="feed-selector-feeds"] [class^="feed-select-header-main-container"] [class^="feed-select-header-team away"]'),
  'GamesFeedModalYesterdayHomeTeamLogo': getByCss('[class^="feed-selector-feeds"] [class^="feed-select-header-main-container"] [class^="feed-select-header-team home"]'),
  'GamesFeedModalYesterdayTitle': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='feed-free-title' and text()='To watch this game, login or upgrade MLB.TV' ]"),
  'GamesFeedModalYesterdayDescription': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='feed-free-description' and contains(text(), 'To watch the current live game')] "),
  'GamesFeedModalYesterdayCondensedFeedBtn': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //button//*[@class='feed-text' and text()='Condensed Game']"),
  'GamesFeedModalYesterdayLabel': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //*[@class='media-type-label' and text()='Full Game Access']"),
  'GamesFeedModalYesterdayGetMlbTvBtn': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //button//*[@class='feed-text' and text()='Get MLB.TV']"),
  'GamesFeedModalYesterdayLoginBtn': getByXpath("//*[@class='feed-selector-feeds'] //*[@class='feed-select-content'] //button//*[@class='feed-text' and text()='Login']"),

  //Get Mlb Tv Btn
  'GetMlbTvBtn': getByXpath("//*[@class='col-center'] //*[@class='button feed-selector-archive-button selected'] //*[@class='feed-text' and text()='Get MLB.TV']"),
  'SubscribeTxt': getByXpath("//*[@class='mlb-paywall-header'] //*[@class='mlb-paywall-title' and text()='Subscribe to MLB.TV']"), 
}

module.exports =  class gamesFeedPage extends generic {
  constructor() {
    super(pageObjects)
  }
}
