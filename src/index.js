import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import App from "./components/App/App.jsx";
import rootReducer from "./redux/reducers/rootReducer";
import watchLoadData from "./redux/generators/saga";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(thunk, sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(watchLoadData);


export default store;
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
