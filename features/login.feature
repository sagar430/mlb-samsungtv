Feature: Login

  @GetMlbTvTest
  Scenario: As a user, I can login with "<Username>" and logout successfully
    Given I go to the "home" page
    And I wait for sometime
    Then I wait for "GamesFeedHeritage" to be displayed
    