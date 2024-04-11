Feature: AdminCategory

Background:
Given that I am logged in as an admin
And standing on the admin question page

Scenario: Update question text in question
When i click on the edit button on a question 
And I type in "Updated question" in the question-field
And I click the Update button on the question
And I click yes on the confirmation modal
Then I should see "Updated question" as the updated question text 