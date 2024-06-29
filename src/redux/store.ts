import { createStore } from "easy-peasy";
import { models } from "./models";

const store = createStore(models);

export { store };
