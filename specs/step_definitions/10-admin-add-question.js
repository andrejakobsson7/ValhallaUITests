import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

Given("standing on the admin question page", () => {
  cy.visitAdminQuestionPage();
});

When("I type {string} in question field", (question) => {
  //Add waiting time to make sure Blazor has loaded the page twice.
  cy.wait(1000);
  cy.get('[name="Question.Question"]').type(question);
});

When("I type {string} in explanation field", (explanation) => {
  cy.get('[name="Question.Explanation"]').type(explanation);
});

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I select the first available parent-entity in the dropdown menu for parent-entities', () => {});*/

When("I type {string} in answer field", (answer) => {
  cy.get('[name="Answer.Answer"]').type(answer);
});

When("i click on the correct answer checkbox", () => {
  cy.get('[type="checkbox"]').click();
});

When("I click the button to add a new answer", () => {
  cy.get(".card > form > .btn").click();
});

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I should see {string} in the bottom of the {string} container', (a, b) => {});*/

/* No duplicate steps, this one already above
When('I type {string} in question field', (a) => {});*/

/* No duplicate steps, this one already above
When('I type {string} in explanation field', (a) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I select the first available parent-entity in the dropdown menu for parent-entities', () => {});*/

/* No duplicate steps, this one already above
When('I type {string} in answer field', (a) => {});*/

/* No duplicate steps, this one already above
When('I click the button to add a new answer', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

Then("I should see an error prompt", () => {
  cy.get("#myAlert").should("be.visible");
});

/* No duplicate steps, this one already above
When('I type {string} in question field', (a) => {});*/

/* No duplicate steps, this one already above
When('I type {string} in explanation field', (a) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I select the first available parent-entity in the dropdown menu for parent-entities', () => {});*/

/* No duplicate steps, this one already above
When('I type {string} in answer field', (a) => {});*/

/* No duplicate steps, this one already above
When('i click on the correct answer checkbox', () => {});*/

/* No duplicate steps, this one already above
When('I click the button to add a new answer', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already above
When('I type {string} in answer field', (a) => {});*/

/* No duplicate steps, this one already above
When('I click the button to add a new answer', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already above
Then('I should see an error prompt', () => {});*/
