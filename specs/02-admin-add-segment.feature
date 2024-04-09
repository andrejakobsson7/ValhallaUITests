Feature: Admin Add Segment

Background:
Given that I am logged in as an admin
And standing on the admin segment page

Scenario: Add new complete segment
When I type "New admin test-segment" in segment-name field
And I type "Description for new admin test-segment" in segment-description field
And I select the first available category in the dropdown menu for categories
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see "New admin test-segment" and "Description for new admin test-segment" in the bottom of the segment container

Scenario: Add new segment without description
When I type "Segment without description" in segment-name field
And I select the first available category in the dropdown menu for categories
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see "Segment without description" in the bottom of the segment container

Scenario: Add new segment without name
And I type "Description for segment without name" in segment-description field
And I select the first available category in the dropdown menu for categories
And I click the button to create a new entity
Then I should see a validation error message

Scenario: Add new segment without category
When I type "Segment without category" in segment-name field
And I type "Description for segment without category" in segment-description field
And I click the button to create a new entity
Then I should see a validation error message

Scenario: Fill in all information but click No in confirmation
When I type "New admin test-segment" in segment-name field
And I type "Description for new admin test-segment" in segment-description field
And I select the first available category in the dropdown menu for categories
And I click the button to create a new entity
And I click no in the confirmation modal
Then the confirmation modal should be closed
And I shall still see "New admin test-segment" in segment-name field
And I shall still see "Description for new admin test-segment" in segment-description field
And I shall still have the first available category selected in the dropdown for categories
