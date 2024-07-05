import { WaitTimes } from "cypress/types";

const newUserEmail = "new.user@email.com";
const existingUserEmail = "existing.user@email.com";
const validPassword = "P@55w0rd@1";
const inValidEmail = "anInvalidEmail";
const inValidPassword = "P55w0rd1";

const emailSelector = "[data-cy=signup-email]";
const passwordSelector = "[data-cy=signup-password]";
const submitButtonSelector = "[data-cy=button]";
const alertSelector = "[data-cy=alert]";

describe("Signup form", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.wait(WaitTimes.Medium);
    cy.get("[data-cy=toggle-auth-form-button]").click();
    cy.wait(WaitTimes.Short);
  });

  it.skip("1. will disable submit button if email or password fails validation", () => {
    //email validation failure
    cy.get(emailSelector).type(inValidEmail);
    cy.get(submitButtonSelector).first().should("have.attr", "disabled");

    //password validation failure
    cy.get(passwordSelector).type(inValidPassword);
    cy.get(submitButtonSelector).first().should("have.attr", "disabled");

    //valid email and password
    cy.get(passwordSelector).type(validPassword);
    cy.get(emailSelector).type(newUserEmail);
    cy.get(submitButtonSelector).first().should("not.be.disabled");
  });

  it("2. displays an error message in an alert on API error", () => {
    const errorMessage = "Email or Username are already taken";

    cy.get(emailSelector).type(existingUserEmail);
    cy.get(passwordSelector).type(validPassword);

    cy.get(submitButtonSelector).first().click();

    cy.intercept("POST", "mystore/register", {
      statusCode: 400,
      body: {
        error: {
          message: errorMessage,
        },
      },
    }).as("registerRequest");

    cy.wait(WaitTimes.Short);

    cy.get(alertSelector).should("contain", errorMessage);
  });
});
