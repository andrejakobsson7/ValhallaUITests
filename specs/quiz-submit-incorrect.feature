   Feature: Submit  
   
   Background:
    Given that I am logged in as a user
    And i am on the quiz page

     Scenario: Submit any incorrect answer
     When i select any incorrect answer
     And i click on the submit button
     Then i should see the incorrect banner
