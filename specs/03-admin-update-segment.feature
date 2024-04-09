Feature: Admin Update Segment

Background:
Given that I am logged in as an admin
And standing on the admin segment page

Scenario: Update name in segment
When I click the Edit-button for a segment not named "UPDATED SEGMENT NAME"
And I type in "UPDATED SEGMENT NAME" in segment name-field
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "UPDATED SEGMENT NAME" as the updated segments name 

Scenario: Update description in segment
When I click the Edit-button for a segment not having the description "NEW SEGMENT DESCRIPTION_0123"
And I type in "NEW SEGMENT DESCRIPTION_0123" in segment description-field
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "NEW SEGMENT DESCRIPTION_0123" as the updated segments description 

Scenario: Update category in segment
When I click the Edit-button for a segment not having the category "Cybersäkerhet för företag"
And I select category "Cybersäkerhet för företag" in the dropdown
And I click the Update button
And I click Yes in the confirmation modal
Then I should see "Cybersäkerhet för företag" as the updated segments category 




