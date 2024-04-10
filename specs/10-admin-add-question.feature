Feature: AdminCategory

Background:
Given that I am logged in as an admin
And standing on the admin question page

Scenario: Add new complete question
When I type "New admin test-question" in question field
And I type "Explanation for new admin test-question" in explanation field
And I select the first available parent-entity in the dropdown menu for parent-entities
And I type "Test-answer" in answer field
And i click on the correct answer checkbox
And I click the button to add a new answer
And I click yes in the confirmation modal
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see "New admin test-question" and "Explanation for new admin test-question" in the bottom of the "question" container

Scenario: Add new question with no correct answers
When I type "New admin test-question" in question field
And I type "Explanation for new admin test-question" in explanation field
And I select the first available parent-entity in the dropdown menu for parent-entities
And I type "Test-answer" in answer field
And I click the button to add a new answer
And I click yes in the confirmation modal
And I click the button to create a new entity
And I click yes in the confirmation modal
Then I should see an error prompt 