Feature: Register

Background:
Given that I am on the register page

Scenario: Register with complete information
When I type email-address in register-email field
And I type username in register-username field
And I type password in register-password field
And I type confirmed-password in confirmPassword field
And I have ticked the agree terms checkbox
And I click the Register button
Then I should be redirected to confirmation page

Scenario: Register with taken username
When I type email-address in register-email field
And I type "user" in register-username field
And I type password in register-password field
And I type confirmed-password in confirmPassword field
And I have ticked the agree terms checkbox
And I click the Register button
Then I should see an error message that username "user" is already taken

Scenario: Register without ticking terms checkbox
When I type email-address in register-email field
And I type username in register-username field
And I type password in register-password field
And I type confirmed-password in confirmPassword field
And I click the Register button
Then I should see an error message that I have to agree to the terms
