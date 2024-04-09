import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in as an admin", () => {
  cy.loginAsAdmin();
});

Given("standing on the admin category page", () => {
  cy.visitAdminCategoryPage();
  cy.wait(1500);
});

When("I type {string} in name field", (categoryName) => {
  cy.get('[name="Category.Name"]').type(categoryName);
});

When("I type {string} in description field", (categoryDescription) => {
  cy.get('[name="Category.Description"]').type(categoryDescription);
});

When("I click the button to create a new entity", () => {
  cy.get(".card > .btn").click();
});

When("I click yes in the confirmation modal", () => {
  cy.get(".btn-primary").click();
});

Then(
  "I should see {string} and {string} in the bottom of the category container",
  (a, b) => {
    cy.get(".category > :last-child").contains(a);
    cy.get(".category > :last-child").contains(b);
  }
);
