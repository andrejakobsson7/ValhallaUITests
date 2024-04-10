import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

let firstAvailableStartCategoryIndex = 3;
let firstAvailableStartSegmentIndex = 3;
let firstAvailableSubCategoryIndex = 1;

/* No duplicate steps, this one already in 05-category-user-page.js
Given('that I am logged in as user', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('I click on a category where the user has not finished all segments', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('I am redirected to the selected category page', () => {});*/

Given("I click on an available segment", () => {
  //Find all paragraphs
  cy.get(".card > .card-header > p")
    .each(($element) => {
      //Loop through each found paragraph and look for the completion text.
      if ($element.text().includes("Du har klarat") === false) {
        console.log($element.text());
        //If not found in the current element, add to indexer.
        firstAvailableStartSegmentIndex++;
        console.log(firstAvailableStartSegmentIndex);
      } else {
        //If found, break.
        return false;
      }
    })
    .then(() => {
      //Use the index to access the element and click the button.
      cy.get(
        `:nth-child(${firstAvailableStartSegmentIndex}) > .card > .card-header > a > h5`
      ).click();
    });
});

Given("I am redirected to the selected segment page", () => {
  cy.wait(1000);
  cy.verifyURL("Segment");
});

When("I click a link for a locked subcategory", () => {
  //Loop through each subcategory and look for which subcategoryIndex the user is available to start from
  cy.get(".card")
    .each(($element) => {
      if ($element.text().includes("Slutför tidigare subkategorier") == false) {
        console.log($element.text());
        firstAvailableSubCategoryIndex++;
        console.log(firstAvailableSubCategoryIndex);
      } else {
        return false;
      }
    })
    .then(() => {
      cy.get(
        `:nth-child(${firstAvailableSubCategoryIndex}) > .card > .card-img-overlay`
      ).click();
    });
});

Then("I should remain on the same page", () => {
  cy.verifyURL("Segment");
});

When("I click on a clickable subcategory", () => {
  cy.get(`:nth-child(${firstAvailableSubCategoryIndex - 1}) > .card`).click();
});

Then("I should be redirected to quiz page", () => {
  cy.verifyURL("quiz");
});
