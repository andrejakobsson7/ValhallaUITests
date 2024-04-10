import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in 05-category-user-page.js
Given('that I am logged in as user', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

Then("I should only see links for Home, User and Support pages", () => {
  cy.get("#navbarSupportedContent")
    .find("a")
    .each(($atag) => {
      let link = $atag.prop("href");
      console.log($atag.prop("href"));
      expect(link).not.to.include("https://localhost:7107/Account/Login");
      expect(link).not.to.include("https://localhost:7107/Account/Register");
      expect(link).not.to.include("https://localhost:7107/Admin/AdminPage");
    });
});

/* No duplicate steps, this one already in 05-category-user-page.js
Given('that I am logged in as user', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

When("I click on the user link", () => {
  // TODO: implement step
  cy.get('[href="/UserPage"]').click();
});

Then("I should be redirected to the user page", () => {
  // TODO: implement step
  cy.verifyURL("https://localhost:7107/UserPage");
});

/* No duplicate steps, this one already in 05-category-user-page.js
Given('that I am logged in as user', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

When("I click on the support link", () => {
  cy.get('[href="/Support"]').click();
});

Then("I should be redirected to the support page", () => {
  // TODO: implement step
  cy.verifyURL("https://localhost:7107/Support");
});

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

Then("I should see links for Home, User, Admin and Support pages", () => {
  cy.get("#navbarSupportedContent")
    .find("a")
    .each(($atag) => {
      let link = $atag.prop("href");
      console.log($atag.prop("href"));
      expect(link).not.to.include("https://localhost:7107/Account/Login");
      expect(link).not.to.include("https://localhost:7107/Account/Register");
    });
});

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

When("I click on the admin link", () => {
  // TODO: implement step
  cy.get('[href="/Admin/AdminPage"]').click();
});

Then("I should be redirected to the admin page", () => {
  // TODO: implement step
  cy.verifyURL("https://localhost:7107/Admin/AdminPage");
});
