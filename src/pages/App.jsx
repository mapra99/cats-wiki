import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import CommonLayout from './layouts/CommonLayout';
import ScrollToTop from '../components/shared/ScrollToTop.jsx'
import Home from './Home';
import TopBreeds from './TopBreeds';
import BreedDetails from './BreedDetails';

const App = () => (
  <BrowserRouter>
      <CommonLayout>
        <ScrollToTop />
        <Route exact path="/" component={Home} />
        <Route exact path="/top-breeds" component={TopBreeds} />
        <Route exact path="/breeds/:breedId" component={BreedDetails} />
      </CommonLayout>
  </BrowserRouter>
);

export default App;
