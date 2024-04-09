import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let index = 3;
/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Given('standing on the admin segment page', () => {});*/

When("I click the Edit-button for the first available segment", () => {
  cy.get(`:nth-child(${index}) > .card-body > .btn-info`).click();
});

/* No duplicate steps, this one already in 03-admin-update-segment.js
When('I type in {string} in segment name-field', (a) => {});*/

/* No duplicate steps, this one already in 03-admin-update-segment.js
When('I click the Update button', () => {});*/

/* No duplicate steps, this one already in 03-admin-update-segment.js
When('I click Yes in the confirmation modal', () => {});*/

When(
  "I click Delete-button for the first available segment with the name {string}",
  (a) => {
    cy.get(`:nth-child(${index}) > .card-body > .card-title`).contains(a);
    cy.get(`:nth-child(${index}) > .card-body > .btn-danger`).click();
  }
);

/* No duplicate steps, this one already in 03-admin-update-segment.js
When('I click Yes in the confirmation modal', () => {});*/

Then("I should not see {string} in the place where I deleted it from", (a) => {
  cy.get(`:nth-child(${index}) > .card-body > .card-title`).should(
    "not.contain",
    a
  );
});
