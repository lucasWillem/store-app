import { mount } from "@cypress/react18";
import { AppProvider } from "@/components/providers/AppProvider";
import { Loader } from "@/components/atoms/Loader";

const loaderSelector = "[data-cy=loader]";

describe("1. Loader Component Tests", () => {
  it("should display the loader when isLoading is true", () => {
    mount(
      <AppProvider>
        <Loader isLoading={true} />
      </AppProvider>,
    );
    cy.get(loaderSelector).should("be.visible");
  });

  it("2. should not display the loader when isLoading is false", () => {
    mount(
      <AppProvider>
        <Loader isLoading={false} />
      </AppProvider>,
    );
    cy.get("circle").should("not.exist");
  });
});
