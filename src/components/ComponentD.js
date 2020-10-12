import React,{useContext} from "react";
import {CountContext} from '../App'
const ComponentD = () => {
  const countContext=useContext(CountContext)
  return <div>
  <h6 className="text-primary">Inside Component B (State coming from D that is nested in B)</h6>
  <button className="btn btn-primary" onClick={()=>countContext.countDispatch('increment')}>Increment</button>
  <button className="btn btn-danger" onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
  <button className="btn btn-success" onClick={()=>countContext.countDispatch('reset')}>Reset</button>
  </div>;
};

export default ComponentD;
