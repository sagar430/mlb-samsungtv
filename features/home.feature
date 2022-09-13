@home
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
    
    @homePageSettings
  Scenario: As a user, I can click Settings from the home page properly
    Given I go to the "home" page
    When I go to Settings from Home

    @homePageSettingsLogin
  Scenario: As a user, I can verify Login from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsLogin" to be displayed
    And I click on "SettingsLogin"
    And I wait for sometime
    And I login using valid credentials
    Then I wait for "VerifyLoginSuccessTxt" to be displayed

    @homePageSettingsFavoriteTeam 
  Scenario: As a user, I can verify Favorite Team from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsFavoriteTeam" to be displayed
    And I click on "SettingsFavoriteTeam"
    And I wait for sometime

@homePageSettingsFollowingTeam 
  Scenario: As a user, I can verify Following Team from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsFollowingTeam" to be displayed
    And I click on "SettingsFollowingTeam"
    And I wait for sometime
    # Then I wait for "VerifyFollowingTeamTxt" to be displayed

    @homePageSettingsHideSpoilers 
  Scenario: As a user, I can verify Hide Spoilers from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsHideSpoilers" to be displayed
    And I click on "SettingsHideSpoilers"
    And I wait for sometime
    # Then I wait for "VerifyHideSpoilersOnBtnIsSelected" to be displayed

    @homePageSettingsAutoplayLiveContent 
  Scenario: As a user, I can verify Autoplay Live Content from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsAutoplayLiveContent" to be displayed
    And I click on "SettingsAutoplayLiveContent"
    And I wait for sometime
    # Then I wait for "VerifyAutoplayLiveContentOffBtnIsSelected" to be displayed
    
  #can't get to work
    @homePageSettingsGetMlbTv @test
  Scenario: As a user, I can verify Get Mlb Tv from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsGetMlbTv" to be displayed
    And I click on "SettingsGetMlbTv"
    And I wait for sometime
    Then I wait for "SubscribeTxt" to be displayed

#doesn't let me click, only can use keyboard controls
@homePageSettingsClosedCaptions @test1
  Scenario: As a user, I can verify Closed Captions from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsClosedCaptions" to be displayed
    And I click on "SettingsClosedCaptions"
    And I wait for sometime
    # Then I wait for "VerifyClosedCaptionsOnBtnIsSelected" to be displayed

    @homePageSettingsTermsOfService 
  Scenario: As a user, I can verify Terms of Service from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsTermsOfService" to be displayed
    And I click on "SettingsTermsOfService"
    And I wait for sometime
    # Then I wait for "VerifyTermsOfServiceTxt" to be displayed

    #does not let me click, only can use keyboard controls
        @homePageSettingsContactSupport @test2
  Scenario: As a user, I can verify Contact Support from Settings on the home page 
    Given I go to the "home" page
    When I go to Settings from Home
    Then I wait for "SettingsContactSupport" to be displayed
    And I wait for sometime
    And I click on "SettingsContactSupport"
    And I wait for sometime
    # Then I wait for "VerifyContactSupportTxt" to be displayed