import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the main page", () => {
  cy.visit("https://localhost:7107/");
});

Then("I should click on the support button", () => {
  cy.get(".bi").click();
});

Then("I should click on the link at the bottom", () => {
  cy.get("p > a").first().click();
});

Then("I should write on the Question area", () => {
  const questionText = "are you going to add more questions?";

  cy.get(".text-area").type(questionText);
});

Then("I should write my username in the username section", () => {
  const username = "user1053";

  cy.get('[placeholder="Användarnamn"]').type(username);
});

Then("I Should click on the checkbox", () => {
  cy.get('[type="checkbox"]').check();
});

Then("I should click on the ask question button", () => {
  cy.get(".btn").click();
});
