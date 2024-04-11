Feature: AdminCategory

Background:
Given that I am logged in as an admin
And standing on the admin question page

Scenario: Delete a question
When i click on the delete button on a question 
Then the question should not be visible on the page 