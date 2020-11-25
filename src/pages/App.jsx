import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CommonLayout from './layouts/CommonLayout';
import Home from './Home';
import TopBreeds from './TopBreeds';

const App = () => (
  <BrowserRouter>
    <CommonLayout>
      <Route exact path="/" component={Home} />
      <Route exact path="/top-breeds" component={TopBreeds} />
    </CommonLayout>
  </BrowserRouter>
);

export default App;
