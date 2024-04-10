Feature: Admin Delete Subcategory

Background:
Given that I am logged in as an admin
And standing on the admin subcategory page

Scenario: Delete subcategory
When I click the Edit-button for the first available entity
And I type in "ENTITY TO BE DELETED" in "subcategory" name-field
And I click the Update button
And I click Yes in the confirmation modal
When I click Delete-button for the first available entity with the name "ENTITY TO BE DELETED"
And I click Yes in the confirmation modal
Then I should not see "ENTITY TO BE DELETED" in the place where I deleted it from