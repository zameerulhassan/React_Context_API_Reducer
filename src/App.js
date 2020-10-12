/**
 * Courtesy: Wishwas - Codevolution
read about reducer @ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */
  
import React, { createContext, useReducer } from "react";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";

//step-3 create/export Context
export const CountContext = createContext();

//step-1
//reducer function
const initialSate = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialSate;
    default:
      return state;
  }
};

function App() {
  //step-2
  const [count, dispatch] = useReducer(reducer, initialSate);
  //but we want the dispatch to come from nested components

  //step-4 wrap app component with context.provider
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="container">
        <div className="card">
          <div className="text-center x-large">Count = {count}</div>
        </div>
        <div className="card text-center">
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </div>
      </div>
    </CountContext.Provider>
  );
}

export default App;
