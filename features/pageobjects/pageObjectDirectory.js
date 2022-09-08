import loginPage from './login/loginPage.object'
import gamesPage from './games/gamesPage.object'
import homePage from './home/homePage.object'
import gamesFeedPage from './games/gamesFeedPage.object'
import recapClipsPage from './recap/recapClipsPage.object'
import condensedClipsPage from './condensed/condensedClipsPage.object'

const login = new loginPage()
const games = new gamesPage()
const home = new homePage()
const gamesFeed = new gamesFeedPage()
const recapClips = new recapClipsPage()
const condensedClips = new condensedClipsPage()

export {default as loginPage} from './login/loginPage.object'
export {default as gamesPage} from './games/gamesPage.object'
export {default as homePage} from './home/homePage.object'
export {default as gamesFeedPage} from './games/gamesFeedPage.object'
export {default as recapClipsPage} from './recap/recapClipsPage.object'
export {default as condensedClipsPage} from './condensed/condensedClipsPage.object'

export default {
  login,
  games,
  home,
  gamesFeed,
  recapClips,
  condensedClips,
}
