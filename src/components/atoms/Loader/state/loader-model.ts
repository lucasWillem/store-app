import { Action, action } from "easy-peasy";

interface LoaderConfig {
  isVisible: boolean;
}
export interface LoaderModel {
  loaderConfig: LoaderConfig;
  configureLoader: Action<LoaderModel, LoaderConfig>;
}

const loaderModel: LoaderModel = {
  loaderConfig: { isVisible: false },
  configureLoader: action((state, payload) => {
    state.loaderConfig = payload;
  }),
};

export default loaderModel;
