import React from 'react';

import CommonLayout from './layouts/CommonLayout';
import Hero from '../components/Hero';
import MostSearchedCats from '../components/MostSearchedCats';
import HomeBanner from '../components/HomeBanner';

import '../styles/pages/Home.scss';

const Home = () => (
  <CommonLayout>
    <Hero />
    <MostSearchedCats />
    <HomeBanner />
  </CommonLayout>
);

export default Home;
