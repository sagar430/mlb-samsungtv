Feature: Games

  @gamestile
  Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    And I wait for sometime
    Then I wait for "GamesTabFirstTile" to be displayed
    And I wait for "GamesTabFirstTileHomeTeamLogo" to be displayed
    And I wait for "GamesTabFirstTileHomeTeamName" to be displayed
    And I wait for "GamesTabFirstTileHomeTeamRecord" to be displayed
    And I wait for "GamesTabFirstTileHomeTeamPitcherHeadshot" to be displayed
    And I wait for "GamesTabFirstTileHomeTeamPitcherName" to be displayed
    And I wait for "GamesTabFirstTileHomeTeamPitcherStats" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamLogo" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamName" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamRecord" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamPitcherHeadshot" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamPitcherName" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamPitcherStats" to be displayed
    And I wait for "GamesTabFirstTileDivider" to be displayed
    And I wait for "GamesTabFirstTileGameStatus" to be displayed
    And I wait for "GamesTabFirstTileGameStatesBase" to be displayed
    And I wait for "GamesTabFirstTileGameStatesOut" to be displayed
    And I click on "GamesTabFirstTile" 
    And I wait for sometime


@previousgames
  Scenario: As a user, I can navigate to previous game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    # And I go to previous date from Games
    # And I press down once
    # And I wait for "GamesTabFirstTile" to be displayed
    # And I wait for "GamesTabFirstTileHomeTeamLogo" to be displayed
    # And I wait for "GamesTabFirstTileHomeTeamName" to be displayed
    # And I wait for "GamesTabFirstTileHomeTeamRecord" to be displayed
    # And I wait for sometime
    #And I wait for "GamesTabFirstTileHomeTeamPitcherHeadshot" to be displayed
    #And I wait for "GamesTabFirstTileHomeTeamPitcherName" to be displayed
    #And I wait for "GamesTabFirstTileHomeTeamPitcherStats" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamLogo" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamName" to be displayed
    And I wait for "GamesTabFirstTileAwayTeamRecord" to be displayed
    #And I wait for "GamesTabFirstTileAwayTeamPitcherHeadshot" to be displayed
    #And I wait for "GamesTabFirstTileAwayTeamPitcherName" to be displayed
    #And I wait for "GamesTabFirstTileAwayTeamPitcherStats" to be displayed
    And I wait for "GamesTabFirstTileDivider" to be displayed
    And I wait for "GamesTabFirstTileGameStatus" to be displayed
    And I wait for sometime