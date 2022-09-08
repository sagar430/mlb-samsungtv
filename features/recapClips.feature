Feature: Recap Clips

  @recapClips
  Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    And I go to previous date from Games
    Then I wait for "GamesTabSecondTile" to be displayed
    And I click on "GamesTabSecondTile"
    And I click on "RecapBtn"
    And I wait for "RecapClipsCCBtn" to be displayed
    And I wait for "RecapClipsSlider" to be displayed
    