import App from "./App";
import { mount } from "@cypress/react18";
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
