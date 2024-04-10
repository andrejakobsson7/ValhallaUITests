Feature: Submit

    Background:
    Given that I am logged in as a user
    And i am on the quiz page

        Scenario: Submit any answer
        When i select any answer
        And i click on the submit button
        Then i should see my answer and the explanation and the next question button should be visible
