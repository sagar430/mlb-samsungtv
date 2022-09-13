Feature: Login

  @GetMlbTvTest
  Scenario Outline: As a user, I can login with "<Username>" and logout successfully
    Given I go to the "home" page
    And I go to Getmlbtv from Home
    And I wait for sometime
    And I press Enter
    And I wait for some more time
    And I enter unique email in "Username" field
    And I enter "<Password>" in "Password" field
    And I press down twice
    And I press Enter
    And I wait for some more time
    # Then I wait for "VerifyAccountCreatedMsg" to be displayed
    
  Examples:
      | Username           | Password       |
      | Loser User        | password       |
      | Loser User        | password       |
      | Loser User        | password       |

  @login
  Scenario Outline: As a user, I can login with "<Username>" and logout successfully
    Given I go to the "home" page
    And I wait for sometime
    And I go to Log In from Home
    And I wait for sometime
    And I enter "<Username>" in "Username" field
    And I enter "<Password>" in "Password" field
    And I press down once
    And I press Enter
    And I wait for sometime
    # And I click on "Log In"
    # And I press Enter
    And I click on "Get Started"
    And I go to Settings from Home
    And I click on "Log Out"
    And I click on "Log Out2"
    And I wait for sometime

    Examples:
      | Username           | Password       |
      | Yearly User        | password       |
      | Monthly User       | password       |
      | Single Team User   | password       |
