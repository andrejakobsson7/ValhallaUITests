import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

/* No duplicate steps, this one already in 10-admin-add-question.js
Given('standing on the admin question page', () => {});*/

When("i click on the edit button on a question", () => {
  cy.wait(2000);
  // Find the last question on the page and click on the edit button
  cy.get(".card-body").find(".btn-info").last().click();
});

When("I type in {string} in the question-field", (newQuestion) => {
  // We type in our new question
  cy.get('.card-body > .card > [name="Question.Question"]')
    .clear()
    .type(newQuestion);
});

When("I click the Update button on the question", () => {
  cy.get(".card-body > .card > .btn").click();
});

When("I click yes on the confirmation modal", () => {
  cy.get(".btn-primary").click();
});

Then(
  // We find the last question on the page again and compare its text content to our provided text
  "I should see {string} as the updated question text",
  (updatedQuestion) => {
    cy.get(".card-body")
      .find(".card-title")
      .last()
      .should(($h5) => {
        const text = $h5.text();
        expect(text).to.eql(`Question: ${updatedQuestion}`);
      });
  }
);
