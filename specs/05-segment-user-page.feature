Feature: User access segment page

Background: 
Given that I am logged in as user
And standing on the home page

Scenario: Click on category with unfinished segments
When I click on a category where the user has not finished all segments
And I am redirected to the selected category page
Then I should not be able to click links for unfinished segments


