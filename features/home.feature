Feature: Home

  @home
  Scenario: As a user, I can select game tiles from home page
    Given I go to the "home" page
    And I select FirstMostpopulartile from Home
    And I wait for sometime
    And I press Back
    And I press Back
    And I press Back
    And I wait for sometime

   @homePageGetMlbTv
  Scenario: As a user, I can validate Get Mlb Tv Function Properly
    Given I go to the "home" page
    When I go to GetMlbTv from Home
    
