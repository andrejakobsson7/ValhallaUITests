import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am on the login page", () => {
  cy.visitLoginPage();
});

When("I type {string} in username field", (username) => {
  cy.get(":nth-child(5) > .form-control").type(username);
});

When("I type {string} in password field", (password) => {
  cy.get(":nth-child(6) > .form-control").type(password);
});

When("I click the Log in button", () => {
  cy.get(".w-100").click();
});

Then("I should see a user link", () => {
  cy.get('[href="/UserPage"]').should("be.visible");
});

Then("I should not see an admin link", () => {
  cy.get('[href="/Admin/AdminPage"]').should("not.exist");
});

Then("I should see an admin link", () => {
  cy.get('[href="/Admin/AdminPage"]').should("be.visible");
});

Then("I should see an error message", () => {
  cy.get(".alert").contains("Error");
});
