import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the home page", () => {
  cy.visit("/");
});

Then(
  "I should only see links for login, register and support in the navbar",
  () => {
    cy.get("#navbarSupportedContent")
      .find("a")
      .each(($atag) => {
        let link = $atag.prop("href");
        console.log($atag.prop("href"));
        expect(link).not.to.include("https://localhost:7107/UserPage");
        expect(link).not.to.include("https://localhost:7107/Admin/AdminPage");
      });
  }
);

When("I click on the login link", () => {
  cy.get('[href="/Account/Login"]').click();
});

Then("I should be redirected to the login page", () => {
  cy.verifyURL("https://localhost:7107/Account/Login");
});

When("I click on the register link", () => {
  cy.get('[href="/Account/Register"]').click();
});

Then("I should be redirected to the register page", () => {
  cy.verifyURL("https://localhost:7107/Account/Register");
});

/* No duplicate steps, this one already in navbar-authorized.js
When('I click on the support link', () => {});*/

/* No duplicate steps, this one already in navbar-authorized.js
Then('I should be redirected to the support page', () => {});*/
