import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

Given("standing on the admin segment page", () => {
  // TODO: implement step
  cy.visitAdminSegmentPage();
  cy.wait(1000);
});

When("I type {string} in {string}-name field", (newSegmentName, entityName) => {
  cy.get(`[name="${entityName}.Name"]`)
    .should("be.enabled")
    .type(newSegmentName);
});

When(
  "I type {string} in {string}-description field",
  (newSegmentDescription, entityName) => {
    cy.get(`[name="${entityName}.Description"]`)
      .should("be.enabled")
      .type(newSegmentDescription);
  }
);

When(
  "I select the first available parent-entity in the dropdown menu for parent-entities",
  () => {
    cy.get("select.valid").select(1);
  }
);

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

Then(
  "I should see {string} and {string} in the bottom of the {string} container",
  (newSegmentName, newSegmentDescription, entityName) => {
    cy.wait(1000);
    cy.get(`.${entityName} > :last-child`).contains(newSegmentName);
    cy.get(`.${entityName} > :last-child`).contains(newSegmentDescription);
  }
);

/* No duplicate steps, this one already above
When('I type {string} in segment-name field', (a) => {});*/

/* No duplicate steps, this one already above
When('I select the first available category in the dropdown menu for categories', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

Then(
  "I should see {string} in the bottom of the {string} container",
  (segmentName, entityName) => {
    cy.wait(1000);
    cy.get(`.${entityName} > :last-child`).contains(segmentName);
  }
);

Then("I should see a validation error message", () => {
  cy.get(".validation-message").should("exist");
});

/* No duplicate steps, this one already above
When('I type {string} in segment-name field', (a) => {});*/

/* No duplicate steps, this one already above
When('I type {string} in segment-description field', (a) => {});*/

/* No duplicate steps, this one already above
When('I select the first available category in the dropdown menu for categories', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

When("I click no in the confirmation modal", () => {
  cy.get(".btn-secondary").click();
});

Then("the confirmation modal should be closed", () => {
  cy.get(".modal-content").should("not.exist");
});

Then(
  "I shall still see {string} in {string}-name field",
  (segmentName, entityName) => {
    cy.get(`[name="${entityName}.Name"]`).should("have.value", segmentName);
  }
);

Then(
  "I shall still see {string} in {string}-description field",
  (segmentDescription, entityName) => {
    cy.get(`[name="${entityName}.Description"]`).should(
      "have.value",
      segmentDescription
    );
  }
);

Then(
  "I shall still have the first available parent-entity selected in the dropdown for parent-entities",
  () => {
    cy.get("select.valid").should("have.value", 1);
  }
);
