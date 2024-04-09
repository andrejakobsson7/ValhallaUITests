import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am on the register page", () => {
  cy.visitRegisterPage();
});

When("I type email-address in register-email field", () => {
  let timeStamp = Date.now();
  cy.get(":nth-child(5) > .form-control").type(`user_${timeStamp}@example.com`);
});

When("I type username in register-username field", () => {
  let timeStamp = Date.now();
  cy.get(":nth-child(6) > .form-control").type(`user_${timeStamp}`);
});

When("I type password in register-password field", () => {
  cy.get(":nth-child(7) > .form-control").type("MySecretPassword123!");
});

When("I type confirmed-password in confirmPassword field", () => {
  cy.get(":nth-child(8) > .form-control").type("MySecretPassword123!");
});

When("I have ticked the agree terms checkbox", () => {
  cy.get("#policyCheckbox").check();
});

When("I click the Register button", () => {
  cy.get(".w-100").click();
});

Then("I should be redirected to confirmation page", () => {
  cy.get("h1").contains("Register confirmation");
});

When("I type {string} in register-username field", (takenUsername) => {
  cy.get(":nth-child(6) > .form-control").type(takenUsername);
});

Then(
  "I should see an error message that username {string} is already taken",
  (takenUsername) => {
    cy.get(".alert").should(
      "have.text",
      `Error: Username '${takenUsername}' is already taken.`
    );
  }
);

Then("I should see an error message that I have to agree to the terms", () => {
  cy.get("#policyCheckbox").should("be.focused");
});
