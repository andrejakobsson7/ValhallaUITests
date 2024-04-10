//Help methods for visiting pages

Cypress.Commands.add("visitFirstPage", () => {
  cy.visit("/");
});

Cypress.Commands.add("visitLoginPage", () => {
  cy.visit("/Account/Login");
});

Cypress.Commands.add("visitRegisterPage", () => {
  cy.visit("/Account/Register");
});

Cypress.Commands.add("visitSupportPage", () => {
  cy.visit("/Support");
});

Cypress.Commands.add("visitAdminCategoryPage", () => {
  cy.visit("/Admin/Category/CategoryPage");
});

Cypress.Commands.add("visitAdminSegmentPage", () => {
  cy.visit("/Admin/Segment/SegmentPage");
});

Cypress.Commands.add("visitAdminSubcategoryPage", () => {
  cy.visit("/Admin/SubCategory/SubCategoryPage");
});

Cypress.Commands.add("visitAdminQuestionPage", () => {
  cy.visit("/Admin/Question/QuestionPage");
});

Cypress.Commands.add("visitHomePage", () => {
  cy.visit("/Hem");
});

//Help method for logging in

Cypress.Commands.add("login", (username, password) => {
  cy.visitLoginPage();
  cy.get(":nth-child(5) > .form-control").type(username);
  cy.get(":nth-child(6) > .form-control").type(password);
  cy.get(".w-100").click();
});

//Help methods for logging in as admin

Cypress.Commands.add("loginAsAdmin", () => {
  cy.login("admin", "Password1234!");
});

Cypress.Commands.add("loginAsUser", () => {
  cy.login("user", "Password1234!");
});

//Help method for registering new user

Cypress.Commands.add(
  "register",
  (email, username, password, confirmedPassword) => {
    cy.visitRegisterPage();
    cy.get(":nth-child(5) > .form-control").type(email);
    cy.get(":nth-child(6) > .form-control").type(username);
    cy.get(":nth-child(7) > .form-control").type(password);
    cy.get(":nth-child(8) > .form-control").type(confirmedPassword);
    cy.get("#policyCheckbox").check();
    cy.get(".w-100").click();
    cy.get('[href^="https://localhost:7107/Account/ConfirmEmail"]').click();
  }
);

//Help method for registering new unconfirmed user

Cypress.Commands.add(
  "makeUnconfirmedRegistration",
  (email, username, password, confirmedPassword) => {
    cy.visitRegisterPage();
    cy.get(":nth-child(5) > .form-control").type(email);
    cy.get(":nth-child(6) > .form-control").type(username);
    cy.get(":nth-child(7) > .form-control").type(password);
    cy.get(":nth-child(8) > .form-control").type(confirmedPassword);
    cy.get("#policyCheckbox").check();
    cy.get(".w-100").click();
  }
);

//Help method for verifying current URL on pages where a specific entity is displayed.
Cypress.Commands.add("verifyURL", (entityName) => {
  cy.url().should("contain", entityName);
});
