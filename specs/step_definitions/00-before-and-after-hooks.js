import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const timeStamp = Date.now();
let newCategory = {
  name: `category_${timeStamp}`,
  description: "Description for newly added category",
};
let newSegment = {
  name: `segment_${timeStamp}`,
  description: "Newly added segments description",
};
let newSegment2 = {
  name: `segment_${timeStamp}_2`,
  description: "Newly added second segments description",
};
let newSubCategory = {
  name: `subcategory_${timeStamp}`,
  description: "Newly added subcategorys description",
};
let newSubCategory2 = {
  name: `subcategory_${timeStamp}_2`,
  description: "Newly added subcategorys description",
};

let newQuestion = {
  question: "Hur mår du?",
  explanation: "Läget kan vara bra, dåligt eller sådär",
};
let newAnswers = [
  {
    answer: "Bra",
    iscorrect: true,
  },
  {
    answer: "Dåligt",
    iscorrect: false,
  },
  {
    answer: "Sådär",
    iscorrect: false,
  },
];

//Before all tests - add:
//One category
//Two segments, both related to the above added category
//Two subcategories, both related to the first added segment above
//One question, related to the first subcategory added above
//Three answers, related to the question added above
before(() => {
  //Add new category
  cy.makeCall("category", "POST", newCategory)
    .then((addedCategory) => {
      expect(addedCategory).to.not.be.null;
      //Set environment variable
      Cypress.env("category", addedCategory);
    })
    .then(() => {
      //Add new segment
      //Set foreign key
      newSegment.categoryId = Cypress.env("category").id;
      cy.makeCall("segment", "POST", newSegment).then((addedSegment) => {
        expect(addedSegment).to.not.be.null;
        expect(addedSegment.categoryId).to.eql(Cypress.env("category").id);
        //Set environment variable
        Cypress.env("segment", addedSegment);
      });
    })
    .then(() => {
      //Add another segment to the first category
      //Set foreign key
      newSegment2.categoryId = Cypress.env("category").id;
      cy.makeCall("segment", "POST", newSegment2).then((addedSegment2) => {
        expect(addedSegment2).to.not.be.null;
        expect(addedSegment2.categoryId).to.eql(Cypress.env("category").id);
        //Set environment variable
        Cypress.env("segment2", addedSegment2);
      });
    })
    .then(() => {
      //Add subcategory
      //Set foreign key
      newSubCategory.segmentId = Cypress.env("segment").id;
      cy.makeCall("subcategory", "POST", newSubCategory).then(
        (addedSubCategory) => {
          expect(addedSubCategory).to.not.be.null;
          expect(addedSubCategory.segmentId).to.eql(Cypress.env("segment").id);
          //Set environment variable
          Cypress.env("subcategory", addedSubCategory);
        }
      );
    })
    .then(() => {
      //Add another subcategory to the first segment
      //Set foreign key
      newSubCategory2.segmentId = Cypress.env("segment").id;
      cy.makeCall("subcategory", "POST", newSubCategory2).then(
        (addedSubCategory2) => {
          expect(addedSubCategory2).to.not.be.null;
          expect(addedSubCategory2.segmentId).to.eql(Cypress.env("segment").id);
          //Set environment variable
          Cypress.env("subcategory2", addedSubCategory2);
        }
      );
    })
    .then(() => {
      //Set foreign key
      newQuestion.subcategoryid = Cypress.env("subcategory").id;
      cy.makeCall("question", "POST", newQuestion).then((addedQuestion) => {
        expect(addedQuestion).to.not.be.null;
        expect(addedQuestion.subCategoryId).to.eql(
          Cypress.env("subcategory").id
        );
        //Set environment variable
        Cypress.env("question", addedQuestion);
      });
    })
    .then(() => {
      //Set foreign keys
      newAnswers.forEach((answer) => {
        answer.questionid = Cypress.env("question").id;
      });
      cy.makeCall("answer", "POST", newAnswers).then((addedAnswers) => {
        expect(addedAnswers).to.not.be.null;
        addedAnswers.forEach((answer) => {
          expect(answer.questionId).to.eql(Cypress.env("question").id);
        });
        //Set environment variable
        Cypress.env("answers", addedAnswers);
      });
    });
});

after(() => {
  //After all tests are done, remove the category added in before hook.
  //Since it will cascade and delete all related entities we don't need to remove added segment, subcategories, questions and answers - it will be done automatically.
  cy.makeCall("category", "DELETE", Cypress.env("category").id).then(
    (isDeleted) => {
      console.log("Category has been successfully deleted: " + isDeleted);
      expect(isDeleted).to.be.true;
    }
  );
});
