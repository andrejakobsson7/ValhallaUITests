import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let foundCompletedCategoryId = 3;
let foundCompletedSegmentId = 3;
let completedSubCategories = 0;
let totalSubCategories = 0;

Given("that I am logged in as user", () => {
  cy.loginAsUser();
});

Given("standing on the home page", () => {
  cy.visitHomePage();
});

Given(
  "I click on a category where the user has not finished all segments",
  () => {
    cy.get(".card > .card-header > .progress")
      .each(($element) => {
        if ($element.text().includes("100%")) {
          foundCompletedCategoryId = foundCompletedCategoryId + 2;
        } else {
          return false;
        }
      })
      .then(() => {
        cy.get(
          `:nth-child(${foundCompletedCategoryId}) > .card > .card-header > a > h5`
        ).click();
      });
  }
);

Given("I am redirected to the selected category page", () => {
  cy.wait(1000);
  cy.url().should("contain", foundCompletedCategoryId - 2);
});

When("I click a link for a locked segment", () => {
  cy.get(".card > .card-header > p")
    .each(($element) => {
      if ($element.text().includes("Du har klarat") === false) {
        console.log($element.text());
        foundCompletedSegmentId = foundCompletedSegmentId + 2;
        console.log(foundCompletedSegmentId);
      } else {
        return false;
      }
    })
    .then(() => {
      cy.get(
        `:nth-child(${
          foundCompletedSegmentId + 1
        }) > .card > .card-header > a > h5`
      ).click();
    });
});

Then("Nothing should happen", () => {
  cy.url().should("contain", `/category/${foundCompletedCategoryId - 2}`);
});

When("I click on a clickable segment", () => {
  cy.get(
    `:nth-child(${foundCompletedSegmentId}) > .card > .card-header > a > h5`
  ).click();
});

Then("I should be redirected to segment page", () => {
  cy.wait(1000);
  cy.url().should("contain", `/Segment/${foundCompletedSegmentId}`);
});
