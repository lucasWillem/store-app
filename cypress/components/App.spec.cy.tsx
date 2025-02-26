import { mount } from "@cypress/react18";
import App from "../../src/App";
import { AppProvider } from "@/components/providers/AppProvider";

describe("<App />", () => {
  it("renders", () => {
    mount(
      <AppProvider>
        <App data-cy="App" />
      </AppProvider>,
    );
  });
});
