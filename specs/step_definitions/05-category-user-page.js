import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let foundCompletedCategoryId;
let foundCompletedSegmentId = 3;

Given("that I am logged in as user", () => {
  cy.loginAsUser();
});

Given("standing on the home page", () => {
  cy.visitHomePage();
});

Given(
  "I click on a category where the user has not finished all segments",
  () => {
    foundCompletedCategoryId = 3;
    cy.get(".card > .card-header > .progress")
      .each(($element) => {
        if ($element.text().includes("100%")) {
          foundCompletedCategoryId++;
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
  cy.verifyURL("category");
});

When("I click a link for a locked segment", () => {
  //Find all paragraphs
  cy.get(".card > .card-header > p")
    .each(($element) => {
      //Loop through each found paragraph and look for the completion text.
      if ($element.text().includes("Slutför tidigare") == false) {
        console.log($element.text());
        //If not found in the current element, add to indexer.
        foundCompletedSegmentId++;
        console.log(foundCompletedSegmentId);
      } else {
        //If found, break.
        return false;
      }
    })
    .then(() => {
      //Use the index to access the element and click the button.
      cy.get(
        `:nth-child(${foundCompletedSegmentId}) > .card > .card-header > a > h5`
      ).click();
    });
});

Then("Nothing should happen", () => {
  cy.verifyURL("category");
});

When("I click on a clickable segment", () => {
  cy.get(
    `:nth-child(${foundCompletedSegmentId - 1}) > .card > .card-header > a > h5`
  ).click();
});

Then("I should be redirected to segment page", () => {
  cy.wait(1000);
  cy.verifyURL("Segment");
});
