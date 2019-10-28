import React from 'react';
import ReactDOM from 'react-dom';

import { App } from 'components/App';
import axios from 'axios';

import '../styles/index.scss';
axios("https://bakesaleforgood.com/api/deals").then(resp => {
  console.log(document.location.pathname.split('/')[1]);
  const initialData = {deals:resp.data,activeDealId : null}
  ReactDOM.render(
    <App initialData={initialData} />,
    document.getElementById('root')
  );
});

