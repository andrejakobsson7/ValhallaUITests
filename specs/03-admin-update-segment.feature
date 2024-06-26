Feature: Admin Update Segment

Background:
Given that I am logged in as an admin
And standing on the admin segment page

Scenario: Update name in entity
When I click the Edit-button for an entity not named "UPDATED ENTITY NAME"
And I type in "UPDATED ENTITY NAME" in "segment" name-field
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "UPDATED ENTITY NAME" as the updated entity name 

Scenario: Update description in entity
When I click the Edit-button for an entity not having the description "NEW ENTITY DESCRIPTION_0123"
And I type in "NEW ENTITY DESCRIPTION_0123" in "segment" description-field
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "NEW ENTITY DESCRIPTION_0123" as the updated entity description 

Scenario: Update category in entity
When I click the Edit-button for an entity not having the parent-entity "Cybersäkerhet för företag"
And I select parent-entity "Cybersäkerhet för företag" in the dropdown
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "Cybersäkerhet för företag" as the updated entity "Category" 




