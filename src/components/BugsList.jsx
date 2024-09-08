import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(store => store.entities.bugs.list)
  
  useEffect(() => {
    dispatch(loadBugs())
  }, []);

  return (
    <div><ul>
        {bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}
      </ul></div>
  );
};

export default BugsList;
