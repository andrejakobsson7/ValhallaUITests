import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in as a user", () => {
  cy.login("user", "Password1234!");
});

Given("i am on the quiz page", () => {
  cy.visit("/Quiz/2");
});

When("i select the correct answer", () => {
  cy.wait(3000);
  cy.get(":nth-child(2) > .btn").click();
});

When("i click on the submit button", () => {
  cy.get(".card-body.mt-1 > div > button").click();
});

Then("i should see the correct banner", () => {
  cy.get(".bg-success").should("be.visible");
});
