import React from 'react';

import CommonLayout from './layouts/CommonLayout';
import Hero from '../components/Hero';
import MostSearchedCats from '../components/MostSearchedCats';

import '../styles/pages/Home.scss';

const Home = () => (
  <CommonLayout>
    <Hero />
    <MostSearchedCats />
  </CommonLayout>
);

export default Home;
