import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

//Duplicate steps are commented out

// Given("that I am logged in as a {string}", () => {
//   cy.login("user", "Password1234!");
// });

// Given("i am on the {string} page", () => {
//   cy.visit("/Quiz/2");
// });

When("i select any answer", () => {
  cy.wait(3000);
  cy.get(":nth-child(1) > .btn").click();
});

// When("i click on the submit button", () => {
//   cy.get(".card-body.mt-1 > div > button").click();
// });

Then(
  "i should see my answer and the explanation and the next question button should be visible",
  () => {
    cy.get(".mt-1 > :nth-child(2) > :nth-child(2)").should("be.visible");
    cy.get(":nth-child(2) > .mt-2").should("be.visible");
    cy.get(":nth-child(2) > button").should("be.visible");
  }
);
