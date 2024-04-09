Feature: AdminCategory

Background:
Given that I am logged in as an admin
And standing on the admin category page

Scenario: Add new complete category
When I type "New admin test-category" in name field
And I type "Description for new admin test-category" in description field
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see "New admin test-category" and "Description for new admin test-category" in the bottom of the category container