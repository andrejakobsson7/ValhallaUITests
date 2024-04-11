Feature: Support-Sida
 
   Background: Having a question

   Scenario: Find Answear
      Given that i am in the first page
      When I click on question button 
      When I click to search for a question and type "Cypress testing"
      And I should find a question
