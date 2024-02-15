@orange-hrm @admin
Feature: OrangeHRM - Admin

  Scenario: As a user, I want to access Admin page
    Given I am on the login page
    And I login with "Admin" credential
    When I click "Admin" menu
    Then I can see "Admin" page
    And I choose to logout
