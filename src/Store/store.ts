import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./Reducers/root.reducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk))