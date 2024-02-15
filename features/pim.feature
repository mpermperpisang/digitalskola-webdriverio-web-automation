@orange-hrm @pim
Feature: OrangeHRM - PIM

  Scenario: As a user, I want to access PIM page
    Given I am on the login page
    And I login with "Admin" credential
    When I click "PIM" menu
    Then I can see "PIM" page
    And I choose to logout
