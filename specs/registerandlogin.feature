Feature: Register And Login In Sequence

Scenario: Register first and then log in
Given that I have made a successful registration
When I log in
Then I should see a user link
And I should not see an admin link

Scenario: Register first but forget to confirm account and then log in
Given that I have made a successful registration but forgot to click that I confirm my account
When I try to log in
Then I should not be granted access

