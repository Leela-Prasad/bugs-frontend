import React from "react";
import configureStore from "./store/configureStore";
import BugsList from "./components/BugsList";

const store = configureStore();

function App() {
  return (
      <BugsList />    
  );
}

export default App;
