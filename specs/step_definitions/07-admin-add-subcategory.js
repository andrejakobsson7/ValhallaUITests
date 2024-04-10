import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

Given("standing on the admin subcategory page", () => {
  cy.visitAdminSubcategoryPage();
  cy.wait(1500);
});

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-name field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-description field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I select the first available parent-entity in the dropdown menu for parent-entities', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I should see {string} and {string} in the bottom of the {string} container', (a, b, c) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-name field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I select the first available parent-entity in the dropdown menu for parent-entities', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I should see {string} in the bottom of the {string} container', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I should see a validation error message', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-name field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-description field', (a, b) => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I should see a validation error message', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-name field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I type {string} in {string}-description field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I select the first available parent-entity in the dropdown menu for parent-entities', () => {});*/

/* No duplicate steps, this one already in 01-admin-add-category.js
When('I click the button to create a new entity', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
When('I click no in the confirmation modal', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('the confirmation modal should be closed', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I shall still see {string} in {string}-name field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I shall still see {string} in {string}-description field', (a, b) => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Then('I shall still have the first available parent-entity selected in the dropdown for parent-entities', () => {});*/
