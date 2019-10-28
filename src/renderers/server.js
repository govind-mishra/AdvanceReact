import React from "react";
import ReactDOMServer from "react-dom/server";

import { App } from "components/App";

import axios from "axios";




export async function serverRenderer() {
  var resp = await axios("https://bakesaleforgood.com/api/deals");
  const initialData = {
    appName: "Reactful",
    deals:resp.data,
    activeDealId:null
  };

  const pageData = {
    title: `Hello ${initialData.appName}`
  };

  

  

  return Promise.resolve({
    initialData,
    initialMarkup: 
    ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ), 
    //initialMarkup: "...loading",
    pageData
  });
}
