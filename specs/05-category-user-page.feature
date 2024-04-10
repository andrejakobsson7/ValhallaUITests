Feature: Category page

Background: 
Given that I am logged in as user
And standing on the home page
And I click on a category where the user has not finished all segments
And I am redirected to the selected category page

Scenario: Click on unavailable segment
When I click a link for a locked segment
Then Nothing should happen

Scenario: Click on available segment
When I click on a clickable segment
Then I should be redirected to segment page