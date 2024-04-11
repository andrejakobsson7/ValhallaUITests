Feature: Support Question Page

  Background: I have a question

  Scenario: I want to add a question
    Given I am on the main page
    Then I should click on the support button 
    Then I should click on the link at the bottom
    Then I should write on the Question area
    And I should write my username in the username section
    Then I Should click on the checkbox 
    And I should click on the ask question button
