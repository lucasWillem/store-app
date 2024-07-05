import { AuthenticationEndPoints } from "@/components/organisms/user-management/constants";
import { RoutePaths } from "@/global";

//TODO: store globally

enum WaitTimes {
  Short = 2000,
  Medium = 10000,
  Long = 15000,
}

const noneExistingUserEmail = "none.existent.user@email.com";
const existingUser = "existing.user@email.com";
const validPassword = "P@55word";
const inValidEmail = "anInvalidEmail";
const inValidPassword = "P55w0rd1";

const emailSelector = "[data-cy=login-email]";
const passwordSelector = "[data-cy=login-password]";
const submitButtonSelector = "[data-cy=button]";
const alertSelector = "[data-cy=alert]";

describe("Login form", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(WaitTimes.Medium);
  });

  it("1. will disable submit button if email or password fails validation", () => {
    //email validation failure
    cy.get(emailSelector).type(inValidEmail);
    cy.get(submitButtonSelector).first().should("have.attr", "disabled");

    //password validation failure
    cy.get(passwordSelector).type(inValidPassword);
    cy.get(submitButtonSelector).first().should("have.attr", "disabled");

    //valid email and password
    cy.get(passwordSelector).type(validPassword);
    cy.get(emailSelector).type(existingUser);
    cy.get(submitButtonSelector).first().should("not.be.disabled");
  });

  it("2. displays an error message in an alert on API error", () => {
    const errorMessage = "Invalid identifier or password";

    cy.get(emailSelector).type(noneExistingUserEmail);
    cy.get(passwordSelector).type(validPassword);

    cy.get(submitButtonSelector).first().click();

    cy.intercept("POST", AuthenticationEndPoints.Login, {
      statusCode: 400,
      body: {
        error: {
          message: errorMessage,
        },
      },
    }).as("loginRequest");

    cy.wait(WaitTimes.Short);

    cy.get(alertSelector).should("contain", errorMessage);
  });

  it("3. the user is directed to the store page if valid user's credentials are entered", () => {
    cy.get(emailSelector).type(existingUser);
    cy.get(passwordSelector).type(validPassword);

    cy.get(submitButtonSelector).first().click();

    cy.url().should("include", RoutePaths.Store);
  });
});
