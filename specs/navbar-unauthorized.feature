Feature: Navbar unauthorized users

Background:
Given I am on the home page

Scenario: Verify links for unauthorized users
Then I should only see links for login, register and support in the navbar

Scenario: Click login link
When I click on the login link
Then I should be redirected to the login page

Scenario: Click register link
When I click on the register link
Then I should be redirected to the register page

Scenario: Click support link
When I click on the support link
Then I should be redirected to the support page
