import React from "react";
import configureStore from "./store/configureStore";
import BugsList from "./components/BugsList";
import { Provider } from "react-redux";
import Bugs from "./components/Bugs";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Bugs />
      {/* <BugsList />     */}
    </Provider>
  );
}

export default App;
