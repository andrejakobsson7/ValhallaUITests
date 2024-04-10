Feature: Navbar authorized users

Scenario: Verify available links for ordinary user
Given that I am logged in as user
And standing on the home page
Then I should only see links for Home, User and Support pages

Scenario: User click user link
Given that I am logged in as user
And standing on the home page
When I click on the user link
Then I should be redirected to the user page

Scenario: User click support page
Given that I am logged in as user
And standing on the home page
When I click on the support link
Then I should be redirected to the support page

Scenario: Verify available links for admin
Given that I am logged in as an admin
And standing on the home page 
Then I should see links for Home, User, Admin and Support pages

Scenario: Admin click admin link
Given that I am logged in as an admin
And standing on the home page 
When I click on the admin link
Then I should be redirected to the admin page
