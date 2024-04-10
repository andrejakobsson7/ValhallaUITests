Feature: Segment page

Background: 
Given that I am logged in as user
And standing on the home page
And I click on a category where the user has not finished all segments
And I am redirected to the selected category page
And I click on an available segment
And I am redirected to the selected segment page

Scenario: Click on unavailable subcategory
When I click a link for a locked subcategory
Then I should remain on the same page

Scenario: Click on available subcategory
When I click on a clickable subcategory
Then I should be redirected to quiz page
