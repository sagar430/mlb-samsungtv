import {locators,generic} from '../../../index'
const {getById, getByCss} = locators

const pageObjects = {

  //Scores
  'Games': getById('games-link'),
  'GamesTabDate': getByCss('#main-scores-date-picker [class="left-datepicker"]'),
  'GamesTabCalender': getByCss('#main-scores-date-picker-button-calendar'),
  'GamesTabPrevious': getByCss('button[aria-label="Previous date"]'),
  'GamesTabNext': getByCss('button[aria-label="Next date"]'),

  'GamesTabFirstTile': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1)'),

  'GamesTabFirstTileHomeTeamLogo': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(1) .tile-score-header-team-logo'),
  'GamesTabFirstTileHomeTeamName': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(1) [class^="tile-score-header-team-label"]'),
  'GamesTabFirstTileHomeTeamRecord': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header"] [class="tile-score-header-team"]:nth-child(1) .tile-score-header-team-record'),
  'GamesTabFirstTileHomeTeamPitcherHeadshot': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class^="tile-score-pitcher"]:nth-child(1) .tile-score-pitcher-headshot'),
  'GamesTabFirstTileHomeTeamPitcherName': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer"] [class^="tile-score-pitcher"]:nth-child(1) [class="tile-score-pitcher-stats-name"]'),
  'GamesTabFirstTileHomeTeamPitcherStats': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row clearfix"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer"] [class^="tile-score-decisions-pitchers"]:nth-child(1) [class^="tile-score-pitcher clearfix"]:nth-child(1) [class^="tile-score-pitcher-stats"] [class^="tile-score-pitcher-stats-info"]'),
  'GamesTabFirstTileHomeScore': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-state"] .tile-score-header-state-score-home'),

  'GamesTabFirstTileAwayTeamLogo': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header"] [class="tile-score-header-team"]:nth-child(3) .tile-score-header-team-logo'),
  'GamesTabFirstTileAwayTeamName': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-team"]:nth-child(3) [class^="tile-score-header-team-label"]'),
  'GamesTabFirstTileAwayTeamRecord': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header"] [class="tile-score-header-team"]:nth-child(3) .tile-score-header-team-record'),
  'GamesTabFirstTileAwayTeamPitcherHeadshot': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer-state-players"] [class^="tile-score-pitcher"]:nth-child(2) .tile-score-pitcher-headshot'),
  'GamesTabFirstTileAwayTeamPitcherName': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer-state-players"] [class^="tile-score-pitcher clearfix"]:nth-child(2) [class="tile-score-pitcher-stats-name"]'),
  'GamesTabFirstTileAwayTeamPitcherStats': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer-state-players"] [class^="tile-score-pitcher"]:nth-child(2) [class="tile-score-pitcher-stats"] .tile-score-pitcher-stats-info'),
  'GamesTabFirstTileAwayScore': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-state"] .tile-score-header-state-score-away'),

  'GamesTabFirstTileDivider': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-header-state"] .tile-score-header-state-score-divider'),
  'GamesTabFirstTileGameStatus': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) .tile-score-footer-state-game-status'),
  'GamesTabFirstTileGameStatesBase': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer"] [class="tile-score-game-state-container"] .game-state-bases'),
  'GamesTabFirstTileGameStatesOut': getByCss('[class^="adk-grid-base"] [class^="mlb-scores-row"]:nth-child(1) [class^="mlb-scores-cell"]:nth-child(1) [class="tile-score-footer"] [class="tile-score-game-state-container"] .game-state-outs'),
  
}

module.exports =  class gamesPage extends generic {
  constructor() {
    super(pageObjects)
  }
}
