import { Action, action } from "easy-peasy";

interface LoaderConfig {
  isVisible: boolean;
}
export interface LoaderModel {
  loaderConfig: LoaderConfig;
  configureLoader: Action<LoaderModel, LoaderConfig>;
}

/**
 * Defines the model for managing loader visibility within an application using the Easy Peasy state management library.
 * This model includes the structure for loader configuration and an action to update this configuration.
 *
 * Interfaces:
 * - `LoaderConfig`: Represents the configuration of the loader, including its visibility state.
 *
 * The `LoaderModel` interface:
 * - `loaderConfig`: Holds the current configuration of the loader, primarily its visibility state.
 * - `configureLoader`: An action for updating the `loaderConfig` state with a new `LoaderConfig` configuration.
 *
 * The `loaderModel` object:
 * - Initializes `loaderConfig` with `isVisible` set to false, indicating that the loader is not visible by default.
 * - Defines `configureLoader` as an action that updates the `loaderConfig` state with the provided `LoaderConfig` object, allowing dynamic control over the loader's visibility.
 *
 * Usage:
 * - Import the `loaderModel` into your store configuration.
 * - Access and modify the loader's visibility using the `configureLoader` action within your application's components, enabling a responsive and user-friendly loading experience.
 */

const loaderModel: LoaderModel = {
  loaderConfig: { isVisible: false },
  configureLoader: action((state, payload) => {
    state.loaderConfig = payload;
  }),
};

export default loaderModel;
