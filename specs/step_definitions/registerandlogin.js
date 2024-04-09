import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let timeStamp1 = Date.now();
let username1 = `user_${timeStamp1}`;
let email1 = `${username1}@example.com`;
let password = "MySecretPassword123!";

var date = new Date();
let timeStamp2 = date.setDate(date.getDate() + 1);
let username2 = `user_${timeStamp2}`;
let email2 = `${username2}@example.com`;

Given("that I have made a successful registration", () => {
  cy.register(email1, username1, password, password);
});

When("I log in", () => {
  cy.login(username1, password);
});

Given(
  "that I have made a successful registration but forgot to click that I confirm my account",
  () => {
    cy.makeUnconfirmedRegistration(email2, username2, password, password);
  }
);
When("I try to log in", () => {
  cy.login(username2, password);
});
Then("I should not be granted access", () => {
  cy.get(".alert").should("be.visible");
});
