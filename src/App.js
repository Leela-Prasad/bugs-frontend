import React from "react";
import configureStore from "./store/configureStore";
import BugsList from "./components/BugsList";
import { Provider } from "react-redux";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <BugsList />    
    </Provider>
  );
}

export default App;
