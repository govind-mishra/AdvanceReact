import React, { useState } from "react";
import Context from "../Store/Context";
import List from "./List";

export function App({ initialData }) {
  //reserve the state of last active deal on page load
  const [activeDealId, setActiveDealId] = useState(initialData.activeDealId);

  const fnHandleActiveDealURL  = (dealid)=>{
    history.pushState({},'test','/'+dealid);
    setActiveDealId(dealid);
  }

  return (
    <Context.Provider value={{ activeDealId, fnHandleActiveDealURL }}>
      <List deals={initialData.deals}></List>;
    </Context.Provider>
  );
}
