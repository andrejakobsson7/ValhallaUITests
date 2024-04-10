Feature: Admin Update Subcategory

Background:
Given that I am logged in as an admin
And standing on the admin subcategory page

Scenario: Update name in entity
When I click the Edit-button for an entity not named "UPDATED ENTITY NAME"
And I type in "UPDATED ENTITY NAME" in "subcategory" name-field
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "UPDATED ENTITY NAME" as the updated entity name 

Scenario: Update description in entity
When I click the Edit-button for an entity not having the description "NEW ENTITY DESCRIPTION_0123"
And I type in "NEW ENTITY DESCRIPTION_0123" in "subcategory" description-field
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "NEW ENTITY DESCRIPTION_0123" as the updated entity description 

Scenario: Update segment in entity
When I click the Edit-button for an entity not having the parent-entity "Del 1 - Cyberspionage"
And I select parent-entity "Del 1 - Cyberspionage" in the dropdown
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "Del 1 - Cyberspionage" as the updated entity "Segment" 