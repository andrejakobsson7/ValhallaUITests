import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let foundSegmentNameId = 3;
let foundSegmentDescriptionId = 3;
let foundSegmentCategoryId = 3;
/* No duplicate steps, this one already in 01-admin-add-category.js
Given('that I am logged in as an admin', () => {});*/

/* No duplicate steps, this one already in 02-admin-add-segment.js
Given('standing on the admin segment page', () => {});*/

When("I click the Edit-button for a segment not named {string}", (a) => {
  //Find first segment that doesn't have the name sent along as parameter
  //Loop through each card title
  cy.get(".card-body > .card-title")
    .each(($element) => {
      //If the title contains the name, add to the variable
      if ($element.text().includes(a)) {
        foundSegmentNameId = foundSegmentNameId + 2;
      } else {
        //When we find a title with another name, we break.
        return false;
      }
    })
    //After the loop has been broken, we use the ID and click the button.
    .then(() => {
      cy.get(
        `:nth-child(${foundSegmentNameId}) > .card-body > .btn-info`
      ).click();
    });
});

When("I type in {string} in segment name-field", (segmentName) => {
  cy.get('.card-body > .card > [name="segmentVM.Name"]')
    .clear()
    .type(segmentName);
});

When("I click the Update button", () => {
  cy.get(".card-body > .card > .btn").click();
});

When("I click Yes in the confirmation modal", () => {
  cy.get(".btn-primary").click();
});

Then(
  "I should see {string} as the updated segments name",
  (updatedSegmentName) => {
    //Use the stored ID and verify that it's name has been updated.
    cy.get(
      `:nth-child(${foundSegmentNameId}) > .card-body > .card-title`
    ).should("have.text", updatedSegmentName);
  }
);

When(
  "I click the Edit-button for a segment not having the description {string}",
  (a) => {
    cy.get(".card-body > p.card-text")
      .each(($element) => {
        if ($element.text().includes(a)) {
          foundSegmentDescriptionId = foundSegmentDescriptionId + 2;
        } else {
          return false;
        }
      })
      .then(() => {
        cy.get(
          `:nth-child(${foundSegmentDescriptionId}) > .card-body > .btn-info`
        ).click();
      });
  }
);

When("I type in {string} in segment description-field", (a) => {
  cy.get('.card-body > .card > [name="segmentVM.Description"]').clear().type(a);
});

Then(
  "I should see {string} as the updated segments description",
  (updatedDescription) => {
    cy.get(
      `:nth-child(${foundSegmentDescriptionId}) > .card-body > p.card-text`
    ).should("have.text", updatedDescription);
  }
);

/* No duplicate steps, this one already above
When('I click the Update button', () => {});*/

/* No duplicate steps, this one already above
When('I click Yes in the confirmation modal', () => {});*/

/* No duplicate steps, this one already above
Then('I should see {string} name on the page', (a) => {});*/

When(
  "I click the Edit-button for a segment not having the category {string}",
  (category) => {
    cy.get(".card-body > h5.card-text")
      .each(($element) => {
        if ($element.text().includes(category)) {
          foundSegmentCategoryId = foundSegmentCategoryId + 2;
        } else {
          return false;
        }
      })
      .then(() => {
        cy.get(
          `:nth-child(${foundSegmentCategoryId}) > .card-body > .btn-info`
        ).click();
      });
  }
);

When("I select category {string} in the dropdown", (category) => {
  cy.get(".card-body > .card > select.valid").select(category);
});

/* No duplicate steps, this one already above
When('I click the Update button', () => {});*/

/* No duplicate steps, this one already above
When('I click Yes in the confirmation modal', () => {});*/

Then("I should see {string} as the updated segments category", (category) => {
  cy.get(
    `:nth-child(${foundSegmentCategoryId}) > .card-body > h5.card-text`
  ).should("have.text", "Category: " + category);
});
