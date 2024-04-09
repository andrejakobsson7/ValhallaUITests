Feature: Login

Background: 
Given that I am on the login page

Scenario: Log in as ordinary user
When I type "user" in username field
And I type "Password1234!" in password field
And I click the Log in button
Then I should see a user link
And I should not see an admin link

Scenario: Login as admin
When I type "admin" in username field
And I type "Password1234!" in password field
And I click the Log in button
Then I should see an admin link

Scenario: Log in with invalid credentials
When I type "-1" in username field
And I type "xyr1" in password field
And I click the Log in button
Then I should see an error message