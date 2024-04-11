import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that i am in the first page", () => {
  cy.visit("https://localhost:7107/");
});

When("I click on question button", () => {
  cy.get(".bi").click();
});

When("I click to search for a question and type {string}", (searchText) => {
  cy.get('input[type="search"]').click().type(searchText).type("{enter}");
});

Then("I should find a question", () => {
  // TODO: implement step
});
