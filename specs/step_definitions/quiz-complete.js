import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let myText = "";

/* No duplicate steps, this one already in quiz-submit-correct.js
Given('that I am logged in as a user', () => {});*/

/* No duplicate steps, this one already in quiz-submit-correct.js
Given('i am on the quiz page', () => {});*/

Given("that the user has completed the quiz", () => {
  cy.wait(3000);
  completeQuiz();
});

When("i click on the quiz complete button", () => {
  cy.get("#completeQuizBtn").click();
});

Then("i should see the quiz complete box and the return home button", () => {
  cy.get(".col-7").should("be.visible");
  cy.get(".btn").should("be.visible");
});

// Not a smart solution, if the number of questions is bigger than 9 the entire method fails

function completeQuiz() {
  // Get the h5 element containing the total questions text
  cy.get("#questionIndex")
    .should(($h5) => {
      // We set the global string variable to the text
      myText = $h5.text();
    })
    .then(() => {
      // Then we take the last character of the text i.e. the total number of questions
      let totalQuestions = parseInt(myText.charAt(myText.length - 1));
      // We're at the first question
      let currentQuestionNr = 1;
      // Keep clicking through the test while we're not at the last question
      while (currentQuestionNr <= totalQuestions) {
        cy.wait(1000);
        cy.get(":nth-child(1) > .btn").click();
        cy.get(".card-body.mt-1 > div > button").click();
        // Break if were at the last question
        if (currentQuestionNr == totalQuestions) {
          break;
        } else {
          cy.get(":nth-child(2) > button").click();
          currentQuestionNr++;
        }
      }
    });
}
