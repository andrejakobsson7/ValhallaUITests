//Help methods for visiting pages

const baseUrl = require("../baseUrl");

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

//Help method for adding new category
Cypress.Commands.add("addNewCategory", (categoryName, categoryDescription) => {
  cy.loginAsAdmin();
  cy.visitAdminCategoryPage();
  cy.wait(1000);
  cy.get('[name="Category.Name"]').should("be.enabled").type(categoryName);
  cy.get('[name="Category.Description"]').type(categoryDescription);
  cy.get(".card > .btn").click();
  cy.get(".btn-primary").click();
  cy.get(".category > :last-child").contains(categoryName);
  cy.get(".category > :last-child").contains(categoryDescription);
});

//Help method for adding new subcategory/segment
Cypress.Commands.add(
  "addNewEntity",
  (entityType, newEntityName, newEntityDescription, newEntityParentName) => {
    cy.loginAsAdmin();
    if (entityType === "segment") {
      cy.visitAdminSegmentPage();
    } else if (entityType === "subcategory") {
      cy.visitAdminSubcategoryPage();
    }
    cy.wait(1000);
    cy.get(`[name="${entityType}.Name"]`)
      .should("be.enabled")
      .type(newEntityName);
    cy.get(`[name="${entityType}.Description"]`)
      .should("be.enabled")
      .type(newEntityDescription);
    //Since the dropdown can contain multiple entities with the same name, we select the first that matches the provided name
    cy.get("select.valid")
      .find("option")
      .contains(newEntityParentName)
      .first()
      .then((element) => {
        cy.get("select.valid").select(element.val());
      });
    cy.get(".card > .btn").click();
    cy.get(".btn-primary").click();
    cy.wait(1000);
    cy.get(`.${entityType} > :last-child`).contains(newEntityName);
    cy.get(`.${entityType} > :last-child`).contains(newEntityParentName);
    cy.get(`.${entityType} > :last-child`).contains(newEntityDescription);
  }
);

Cypress.Commands.add(
  "addNewQuestion",
  (
    question,
    explanation,
    subcategory,
    firstAnswer,
    secondAnswer,
    thirdAnswer
  ) => {
    cy.loginAsAdmin();
    cy.visitAdminQuestionPage();
    cy.wait(1000);
    cy.get('[name="Question.Question"]').should("be.enabled").type(question);
    cy.get('[name="Question.Explanation"]')
      .should("be.enabled")
      .type(explanation);
    //Since the dropdown can contain multiple entities with the same name, we select the first that matches the provided name
    cy.get("select.valid")
      .find("option")
      .contains(subcategory)
      .first()
      .then((element) => {
        cy.get("select.valid").select(element.val());
      });
    cy.get('[name="Answer.Answer"]')
      .should("be.enabled")
      .clear()
      .type(firstAnswer);
    cy.get('[type="checkbox"]').check();
    cy.get(".card > form > .btn").click();
    cy.get(".btn-primary").click();
    cy.get('[name="Answer.Answer"]')
      .should("be.enabled")
      .clear()
      .type(secondAnswer);
    cy.get('[type="checkbox"]').uncheck();
    cy.get(".card > form > .btn").click();
    cy.get(".btn-primary").click();
    cy.get('[name="Answer.Answer"]')
      .should("be.enabled")
      .clear()
      .type(thirdAnswer);
    cy.get(".card > form > .btn").click();
    cy.get(".btn-primary").click();
    cy.get('[value="Create a question"]').click();
    cy.get(".btn-primary").click();
    cy.wait(1000);
    cy.get(".card-body").last().should("contain", question);
    cy.get(".card-body").last().should("contain", explanation);
    cy.get(".card-body").last().should("contain", subcategory);
    cy.get('.card-body > [style="color:green"]')
      .last()
      .should("contain", firstAnswer);
    cy.get(".card-body > :nth-child(6)").last().should("contain", secondAnswer);
    cy.get(".card-body > :nth-child(7)").last().should("contain", thirdAnswer);
  }
);

Cypress.Commands.add("makeCall", (entityType, method, entityToPost) => {
  let encryptedCredentials = btoa("admin:Password1234!");
  if (method === "DELETE") {
    url = `${baseUrl}/api/${entityType}/${entityToPost}`;
  } else {
    url = `${baseUrl}/api/${entityType}`;
  }
  return fetch(url, {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + encryptedCredentials,
    },
    body: JSON.stringify(entityToPost),
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response);
    }
  });
});
