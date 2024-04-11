import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("that I am on the website homepage", () => {
  cy.visit("https://localhost:7107/");
});

Then("there needs to be a login button", () => {
  cy.get('[href="Account/Login"] > button').should("exist");
});

When("I click on the login button", () => {
  cy.get('[href="Account/Login"] > button').click();
});

When("I fill in the username and password", () => {
  const username = "Admin";
  const password = "Password1234!";

  cy.get(":nth-child(5) > .form-control").type(username);
  cy.get(":nth-child(6) > .form-control").type(password);
});

When("I click the login button", () => {
  cy.get(".w-100").click();
});

let searchTerm;

Given("the search term is {string}", (term) => {
  searchTerm = term;
});

When("I type in the search field", () => {
  cy.get(".col-12 > input").type(searchTerm);
});
