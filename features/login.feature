@orange-hrm @login
Feature: OrangeHRM - Login

  Scenario: As a user, I want to login successfully
    Given I am on the login page
    When I login with "Admin" credential
    Then I should see home page
