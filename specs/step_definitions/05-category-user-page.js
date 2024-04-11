import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am logged in as user", () => {
  cy.loginAsUser();
});

Given("standing on the home page", () => {
  cy.visitHomePage();
});

Given(
  "I click on a category where the user has not finished all segments",
  () => {
    cy.get(".card > .card-header > a > h5")
      .contains(Cypress.env("category").name)
      .click();
  }
);

Given("I am redirected to the selected category page", () => {
  cy.wait(1000);
  cy.verifyURL(`category/${Cypress.env("category").id}`);
});

When("I click a link for a locked segment", () => {
  //In the before hook, the category has been added two segments. The last one should be locked since the first one has not been completed.
  cy.get(".card > .card-header > a > h5").last().click();
});

Then("Nothing should happen", () => {
  cy.verifyURL(`category/${Cypress.env("category").id}`);
});

When("I click on a clickable segment", () => {
  //In the before hook, the category has been added two segments. The first one should be available to click.
  cy.get(".card > .card-header > a > h5").first().click();
});

Then("I should be redirected to segment page", () => {
  cy.wait(1000);
  cy.verifyURL(`Segment/${Cypress.env("segment").id}`);
});
