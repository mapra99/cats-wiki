import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Home';
import CommonLayout from './layouts/CommonLayout';

const App = () => (
  <BrowserRouter>
    <CommonLayout>
      <Route exact path="/" component={Home} />
    </CommonLayout>
  </BrowserRouter>
);

export default App;
