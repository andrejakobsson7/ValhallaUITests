Feature: Admin Add Segment

Background:
Given that I am logged in as an admin
And standing on the admin segment page

Scenario: Add new complete entity
When I type "New admin test-entity" in "segment"-name field
And I type "Description for new admin test-entity" in "segment"-description field
And I select the first available parent-entity in the dropdown menu for parent-entities
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see "New admin test-entity" and "Description for new admin test-entity" in the bottom of the "segment" container

Scenario: Add new entity without description
When I type "entity without description" in "segment"-name field
And I select the first available parent-entity in the dropdown menu for parent-entities
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see "entity without description" in the bottom of the "segment" container

Scenario: Add new entity without name
And I type "Description for entity without name" in "segment"-description field
And I select the first available parent-entity in the dropdown menu for parent-entities
And I click the button to create a new entity
Then I should see a validation error message

Scenario: Add new entity without parent-entity
When I type "entity without parent-entity" in "segment"-name field
And I type "Description for entity without parent-entity" in "segment"-description field
And I click the button to create a new entity
Then I should see a validation error message

Scenario: Fill in all information but click No in confirmation
When I type "New admin test-entity" in "segment"-name field
And I type "Description for new admin test-entity" in "segment"-description field
And I select the first available parent-entity in the dropdown menu for parent-entities
And I click the button to create a new entity
And I click no in the confirmation modal
Then the confirmation modal should be closed
And I shall still see "New admin test-entity" in "segment"-name field
And I shall still see "Description for new admin test-entity" in "segment"-description field
And I shall still have the first available parent-entity selected in the dropdown for parent-entities
