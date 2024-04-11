import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
//Create some new entities to make sure the test case uses consistent data.
// let newlyAddedCategory = {
//   name: `category_${Date.now()}`,
//   description: "Description for newly added category",
// };
// let newlyAddedSegment = {
//   name: `segment_${Date.now()}`,
//   description: "Newly added segments description",
// };
// let newlyAddedSubCategory = {
//   name: `subcategory_${Date.now()}`,
//   description: "Newly added subcategorys description",
// };
// let newlyAddedSubCategory2 = {
//   name: "Second new subcategory",
//   description: "Newly added segment2 description",
// };
// let newlyAddedQuestion = {
//   question: "Hur mår du?",
//   explanation: "Läget kan vara bra, dåligt eller sådär",
// };
// let newlyAddedAnswers = [
//   {
//     answer: "Bra",
//     iscorrect: true,
//   },
//   {
//     answer: "Dåligt",
//     iscorrect: false,
//   },
//   {
//     answer: "Sådär",
//     iscorrect: false,
//   },
// ];

// //Before all tests start, add new category, one new segment, two new subcategories, one question and three answers.
// //The first segment should be available to click but not the second one, since you need to finish them in order.
// before(() => {
//   cy.makePost("category", newlyAddedCategory)
//     .then((addedCategory) => {
//       expect(addedCategory).to.not.be.null;
//       newlyAddedCategory = addedCategory;
//     })
//     .then(() => {
//       newlyAddedSegment.categoryId = newlyAddedCategory.id;
//       cy.makePost("segment", newlyAddedSegment).then((addedSegment) => {
//         expect(addedSegment).to.not.be.null;
//         expect(addedSegment.categoryId).to.eql(newlyAddedCategory.id);
//         newlyAddedSegment = addedSegment;
//       });
//     })
//     .then(() => {
//       newlyAddedSubCategory.segmentId = newlyAddedSegment.id;
//       cy.makePost("subcategory", newlyAddedSubCategory).then(
//         (addedSubCategory) => {
//           expect(addedSubCategory).to.not.be.null;
//           expect(addedSubCategory.segmentId).to.eql(newlyAddedSegment.id);
//           newlyAddedSubCategory = addedSubCategory;
//         }
//       );
//     })
//     .then(() => {
//       newlyAddedSubCategory2.segmentId = newlyAddedSegment.id;
//       cy.makePost("subcategory", newlyAddedSubCategory2).then(
//         (addedSubCategory2) => {
//           expect(addedSubCategory2).to.not.be.null;
//           expect(addedSubCategory2.segmentId).to.eql(newlyAddedSegment.id);
//           newlyAddedSubCategory2 = addedSubCategory2;
//         }
//       );
//     })
//     //Add a question to the first subcategory.
//     .then(() => {
//       newlyAddedQuestion.subcategoryid = newlyAddedSubCategory.id;
//       cy.makePost("question", newlyAddedQuestion).then((addedQuestion) => {
//         expect(addedQuestion).to.not.be.null;
//         expect(addedQuestion.subCategoryId).to.eql(newlyAddedSubCategory.id);
//         newlyAddedQuestion = addedQuestion;
//       });
//     })
//     .then(() => {
//       newlyAddedAnswers.forEach((answer) => {
//         answer.questionid = newlyAddedQuestion.id;
//       });
//       cy.makePost("answer", newlyAddedAnswers).then((addedAnswers) => {
//         expect(addedAnswers).to.not.be.null;
//         addedAnswers.forEach((answer) => {
//           expect(answer.questionId).to.eql(newlyAddedQuestion.id);
//         });
//         newlyAddedAnswers = addedAnswers;
//       });
//     });
// });

let firstAvailableStartCategoryIndex = 3;
let firstAvailableStartSegmentIndex = 3;
let firstAvailableSubCategoryIndex = 1;

/* No duplicate steps, this one already in 05-category-user-page.js
Given('that I am logged in as user', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('standing on the home page', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('I click on a category where the user has not finished all segments', () => {});*/

/* No duplicate steps, this one already in 05-category-user-page.js
Given('I am redirected to the selected category page', () => {});*/

Given("I click on an available segment", () => {
  cy.get(".card > .card-header > a > h5")
    .contains(Cypress.env("segment").name)
    .click();

  // //Find all paragraphs
  // cy.get(".card > .card-header > p")
  //   .each(($element) => {
  //     //Loop through each found paragraph and look for the completion text.
  //     if ($element.text().includes("Du har klarat") === false) {
  //       console.log($element.text());
  //       //If not found in the current element, add to indexer.
  //       firstAvailableStartSegmentIndex++;
  //       console.log(firstAvailableStartSegmentIndex);
  //     } else {
  //       //If found, break.
  //       return false;
  //     }
  //   })
  //   .then(() => {
  //     //Use the index to access the element and click the button.
  //     cy.get(
  //       `:nth-child(${firstAvailableStartSegmentIndex}) > .card > .card-header > a > h5`
  //     ).click();
  //   });
});

Given("I am redirected to the selected segment page", () => {
  cy.wait(1000);
  cy.verifyURL(`Segment/${Cypress.env("segment").id}`);
});

When("I click a link for a locked subcategory", () => {
  //In the before hook, the segment has been added two subcategories. The last one should be locked since the first one has not been completed.
  cy.get(".card").last().click();
  // cy.get(".card > .card-header > a > h5").last().click();
  // //Loop through each subcategory and look for which subcategoryIndex the user is available to start from
  // cy.get(".card")
  //   .each(($element) => {
  //     if ($element.text().includes("Slutför tidigare subkategorier") == false) {
  //       console.log($element.text());
  //       firstAvailableSubCategoryIndex++;
  //       console.log(firstAvailableSubCategoryIndex);
  //     } else {
  //       return false;
  //     }
  //   })
  //   .then(() => {
  //     cy.get(
  //       `:nth-child(${firstAvailableSubCategoryIndex}) > .card > .card-img-overlay`
  //     ).click();
  //   });
});

Then("I should remain on the same page", () => {
  cy.verifyURL(`Segment/${Cypress.env("segment").id}`);
});

When("I click on a clickable subcategory", () => {
  //In the before hook, the segment has been added two subcategories. The first one should be available.
  cy.get(".card").first().click();
});

Then("I should be redirected to quiz page", () => {
  cy.verifyURL(`quiz/${Cypress.env("subcategory").id}`);
});
