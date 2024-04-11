import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
/* No duplicate steps, this one already in 05-category-user-page.js
Given('that I am logged in as user', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('I click on a category where the user has not finished all segments', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('I am redirected to the selected category page', () => {});*/

Given("I click on an available segment", () => {
  cy.get(".card > .card-header > a > h5")
    .contains(Cypress.env("segment").name)
    .click();
});

Given("I am redirected to the selected segment page", () => {
  cy.wait(1000);
  cy.verifyURL(`Segment/${Cypress.env("segment").id}`);
});

When("I click a link for a locked subcategory", () => {
  //In the before hook, the segment has been added two subcategories. The last one should be locked since the first one has not been completed.
  cy.get(".card").last().click();
});

Then("I should remain on the same page", () => {
  cy.verifyURL(`Segment/${Cypress.env("segment").id}`);
});

When("I click on a clickable subcategory", () => {
  //In the before hook, the segment has been added two subcategories. The first one should be available.
  cy.get(".card").first().click();
});

Then("I should be redirected to quiz page", () => {
  cy.verifyURL(`quiz/${Cypress.env("subcategory").id}`);
});
