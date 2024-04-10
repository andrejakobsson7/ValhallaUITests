Feature: Quiz completed

    Background:
    Given that I am logged in as a user
    And i am on the quiz page

        Scenario: The user has completed the quiz
        Given that the user has completed the quiz
        When i click on the quiz complete button
        Then i should see the quiz complete box and the return home button
