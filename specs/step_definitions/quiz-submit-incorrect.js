import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in quiz-submit-correct.js
Given('that I am logged in as a user', () => {});*/

/* No duplicate steps, this one already in quiz-submit-correct.js
Given('i am on the quiz page', () => {});*/

When("i select any incorrect answer", () => {
  cy.wait(3000);
  cy.get(":nth-child(3) > .btn").click();
});

/* No duplicate steps, this one already in quiz-submit-correct.js
When('i click on the submit button', () => {});*/

Then("i should see the incorrect banner", () => {
  cy.get(".bg-danger").should("be.visible");
});
