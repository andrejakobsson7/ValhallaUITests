import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

Given("standing on the admin segment page", () => {
  // TODO: implement step
  cy.visitAdminSegmentPage();
  cy.wait(1500);
});

When("I type {string} in segment-name field", (segmentName) => {
  // TODO: implement step
  cy.get('[name="segment.Name"]').type(segmentName);
});

When("I type {string} in segment-description field", (segmentDescription) => {
  cy.get('[name="segment.Description"]').type(segmentDescription);
});

When(
  "I select the first available category in the dropdown menu for categories",
  () => {
    cy.get("select.valid").select(1);
  }
);

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

Then(
  "I should see {string} and {string} in the bottom of the segment container",
  (a, b) => {
    cy.wait(1000);
    cy.get(".segment > :last-child").contains(a);
    cy.get(".segment > :last-child").contains(b);
  }
);

/* No duplicate steps, this one already above
When('I type {string} in segment-name field', (a) => {});*/

/* No duplicate steps, this one already above
When('I select the first available category in the dropdown menu for categories', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

Then("I should see {string} in the bottom of the segment container", (a) => {
  cy.wait(1000);
  cy.get(".segment > :last-child").contains(a);
});

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

Then("I shall still see {string} in segment-name field", (segmentName) => {
  cy.get('[name="segment.Name"]').should("have.value", segmentName);
});

Then(
  "I shall still see {string} in segment-description field",
  (segmentDescription) => {
    cy.get('[name="segment.Description"]').should(
      "have.value",
      segmentDescription
    );
  }
);

Then(
  "I shall still have the first available category selected in the dropdown for categories",
  () => {
    cy.get("select.valid").should("have.value", 1);
  }
);
