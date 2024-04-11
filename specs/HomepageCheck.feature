Feature: Login and Homepage Navigation

  Background:
    Given that I am on the website homepage

  Scenario: User logs in and navigates to the homepage
    Then there needs to be a login button
    When I click on the login button
    Then I should be redirected to the login page
    And I fill in the username and password
    When I click the login button
    Given the search term is "Cyber"
    When I type in the search field

