import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Given("that I am logged in as an admin", () => {
  cy.loginAsAdmin();
});

Given("standing on the admin category page", () => {
  cy.visitAdminCategoryPage();
});

When("I type {string} in name field", (categoryName) => {
  //Add waiting time to make sure Blazor has loaded the page twice. This is a last resort after trying to intercept requests and waiting for them.
  cy.wait(1000);
  cy.get('[name="Category.Name"]').should("be.enabled").type(categoryName);
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
