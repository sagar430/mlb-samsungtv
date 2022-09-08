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
  

}

module.exports =  class homePage extends generic {
  constructor() {
    super(pageObjects)
  }
}
