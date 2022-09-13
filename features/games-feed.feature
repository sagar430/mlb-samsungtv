Feature: Games Feed

  @gamesFeed 
  Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    And I wait for sometime
    Then I wait for "GamesTabFirstTile" to be displayed
    And I go to next date from Games
    And I wait for sometime
    And I click on "GamesTabSecondTile"
    And I wait for "GamesFeedModalTodayEarlyAwayTeamLogo" to be displayed
    And I wait for "GamesFeedModalTodayEarlyHomeTeamLogo" to be displayed
    And I wait for "GamesFeedModalTodayEarlySignalIcon" to be displayed
    And I wait for "GamesFeedModalTodayEarlyYoureEarlyMsg" to be displayed
    And I wait for "GamesFeedModalTodayEarlyNoFeedsTxt" to be displayed
    
    @gamesFeedPrevious 
  Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    And I wait for sometime
    Then I wait for "GamesTabFirstTile" to be displayed
    And I go to previous date from Games
    And I wait for sometime
    And I click on "GamesTabSecondTile"
    And I wait for "GamesFeedModalYesterdayAwayTeamLogo" to be displayed
    And I wait for "GamesFeedModalYesterdayHomeTeamLogo" to be displayed
    And I wait for "GamesFeedModalYesterdayTitle" to be displayed
    And I wait for "GamesFeedModalYesterdayDescription" to be displayed
    And I wait for "GamesFeedModalYesterdayCondensedFeedBtn" to be displayed
    And I wait for "GamesFeedModalYesterdayLabel" to be displayed
    And I wait for "GamesFeedModalYesterdayGetMlbTvBtn" to be displayed
    And I wait for "GamesFeedModalYesterdayLoginBtn" to be displayed

    @getMlbTv
  Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    And I go to previous date from Games
    Then I wait for "GamesTabSecondTile" to be displayed
    And I click on "GamesTabSecondTile"
    When I select GetMlbTvBtn
    And I wait for "SubscribeTxt" to be displayed

    @loginBtn
    Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    When I go to Games from Home
    And I go to previous date from Games
    Then I wait for "GamesTabSecondTile" to be displayed
    And I click on "GamesTabSecondTile"
    When I select loginBtn
    And I login using valid credentials