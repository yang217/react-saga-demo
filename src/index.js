import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { connect, Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducers";
import mySaga from "./sagas";
import App from "./App";
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// then run the saga
sagaMiddleware.run(mySaga);

const AppBooter = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
render(<AppBooter />, document.getElementById("root"));
