import React, { useContext } from "react";
//step-6 import created Context from app.js
import { CountContext } from "../App";
const ComponentA = () => {
  //step-5 useContext
  const countContext = useContext(CountContext);
  return (
    <div>
      <h6 className="text-primary">Inside Component A</h6>
      <button className="btn btn-primary" onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button className="btn btn-success" onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
