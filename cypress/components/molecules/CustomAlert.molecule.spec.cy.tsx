import { mount } from "@cypress/react18";
import { AppProvider } from "@/components/providers/AppProvider";
import CustomAlert from "@/components/molecules/CustomAlert/CustomAlert.molecule";
import { AlertSeverity } from "@/components/molecules/CustomAlert/state/alert-model";

const alertSelector = "[data-cy=alert]";
const closeButtonSelector = `${alertSelector} button`;

describe("CustomAlert Component Tests", () => {
  it("1. should display the alert when isVisible is true", () => {
    const handleOnModalCloseMock = cy.stub().as("handleOnModalCloseMock");

    mount(
      <AppProvider>
        <CustomAlert
          isVisible={true}
          handleOnModalClose={handleOnModalCloseMock}
          message="Test Message"
          severity={AlertSeverity.Error}
        />
      </AppProvider>,
    );
    cy.get(alertSelector).should("be.visible");
  });

  it("2. should hide the alert when isVisible is false", () => {
    const handleOnModalCloseMock = cy.stub().as("handleOnModalCloseMock");

    mount(
      <AppProvider>
        <CustomAlert
          isVisible={false}
          handleOnModalClose={handleOnModalCloseMock}
          message="Test Message"
          severity={AlertSeverity.Error}
        />
      </AppProvider>,
    );
    cy.get(alertSelector).should("not.exist");
  });

  it("3. should close the alert when the close button is clicked", () => {
    const handleOnModalCloseMock = cy.stub().as("handleOnModalCloseMock");

    mount(
      <AppProvider>
        <CustomAlert
          isVisible={true}
          handleOnModalClose={handleOnModalCloseMock}
          message="Test Message"
          severity={AlertSeverity.Error}
        />
      </AppProvider>,
    );
    cy.get(closeButtonSelector).click();

    cy.get("@handleOnModalCloseMock").should("have.been.calledOnce");
  });

  it("4. should close the alert when the click away happens", () => {
    const handleOnModalCloseMock = cy.stub().as("handleOnModalCloseMock");

    mount(
      <AppProvider>
        <CustomAlert
          isVisible={true}
          handleOnModalClose={handleOnModalCloseMock}
          message="Test Message"
          severity={AlertSeverity.Error}
        />
      </AppProvider>,
    );

    cy.get(".MuiBox-root").first().click();
    cy.get("@handleOnModalCloseMock").should("have.been.calledOnce");
  });

  it("should apply the correct style based on severity", () => {
    const handleOnModalCloseMock = cy.stub().as("handleOnModalCloseMock");

    mount(
      <AppProvider>
        <CustomAlert
          isVisible={true}
          handleOnModalClose={handleOnModalCloseMock}
          message="Test Message"
          severity={AlertSeverity.Error}
        />
      </AppProvider>,
    );

    cy.get(alertSelector).should("have.class", "MuiAlert-colorError");
  });

  it("should display the correct message", () => {
    const handleOnModalCloseMock = cy.stub().as("handleOnModalCloseMock");

    mount(
      <AppProvider>
        <CustomAlert
          isVisible={true}
          handleOnModalClose={handleOnModalCloseMock}
          message="Expected Test Message"
          severity={AlertSeverity.Error}
        />
      </AppProvider>,
    );
    cy.get(alertSelector).contains("Expected Test Message");
  });
});
