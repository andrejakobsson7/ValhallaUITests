import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let questionToDeleteText = "";
/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

/* No duplicate steps, this one already in 10-admin-add-question.js
Given('standing on the admin question page', () => {});*/

When("i click on the delete button on a question", () => {
  cy.wait(2000);

  // We get the last question and set its id text to a global variable
  cy.get(".card.question")
    .last()
    .find(".QuestionNumber")
    .should(($p) => {
      questionToDeleteText = $p.text();
      console.log(questionToDeleteText);
    });

  // We then click the delete button and confirm
  cy.get(".card-body").find(".btn-danger").last().click();
  cy.get(".btn-primary").click();
});

Then("the question should not be visible on the page", () => {
  // Wait for blazor to update
  cy.wait(1000);
  // We check each question id to see that it should not match the delete questions id
  cy.get(".QuestionNumber").each(($p) => {
    expect($p.text()).to.not.eql(questionToDeleteText);
  });
});
