Feature: Submit  
   
    Background:
    Given that I am logged in as a user
    And i am on the quiz page

     Scenario: Submit the correct answer
        When i select the correct answer
        And i click on the submit button
        Then i should see the correct banner
