import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
let foundCompletedCategoryId = 3;
let completedSubCategories = 0;
let totalSubCategories = 0;

Given("that I am logged in as user", () => {
  // TODO: implement step
  cy.loginAsUser();
});

Given("standing on the home page", () => {
  // TODO: implement step
  cy.visitHomePage();
});

When(
  "I click on a category where the user has not finished all segments",
  () => {
    // TODO: implement step
    cy.get(".card > .card-header > .progress")
      .each(($element) => {
        if ($element.text().includes("100%")) {
          foundCompletedCategoryId = foundCompletedCategoryId + 2;
        } else {
          return false;
        }
      })
      .then(() => {
        cy.get(
          `:nth-child(${foundCompletedCategoryId}) > .card > .card-header > a > h5`
        ).click();
      });
  }
);

When("I am redirected to the selected category page", () => {
  cy.url().should("contain", foundCompletedCategoryId - 2);
});

Then("I should not be able to click links for unfinished segments", () => {
  // TODO: implement step
  // cy.get(
  //   `:nth-child(${foundCompletedCategoryId}) > .card > .card-header > p`
  // ).find(".completedSubCategories");
  cy.get(`:nth-child(${foundCompletedCategoryId}) > .card > .card-header > p`)
    .find(".completedSubCategories")
    .invoke("text")
    .then((text) => {
      completedSubCategories = parseInt(text);
      // You can now use completedSubCategoriesValue in subsequent steps
    });
  cy.get(`:nth-child(${foundCompletedCategoryId}) > .card > .card-header > p`)
    .find(".totalSubCategories")
    .invoke("text")
    .then((text) => {
      totalSubCategories = parseInt(text);
    });

  // cy.get(".completedSubCategories");
  // cy.get(".card > .card-header > p").each(($element) => {
  //   //Hitta tredje mellanslaget
  //   let thirdSpaceIndex = $element.text().indexOf(" ", 13);
  //   //Hitta fjärde mellanslaget
  //   let fourthSpaceIndex = $element.text().indexOf(" ", thirdSpaceIndex + 1);
  //   //Hitta avklarat antal subkategorier däremellan
  //   let completedSubCategories = $element
  //     .text()
  //     .substring(thirdSpaceIndex, fourthSpaceIndex + 1)
  //     .trim();
  //   console.log("Avklarade subkategorier: " + completedSubCategories);
  // });
});
