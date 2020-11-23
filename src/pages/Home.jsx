import React from 'react';

import Hero from '../components/Hero';
import MostSearchedCats from '../components/MostSearchedCats';
import HomeBanner from '../components/HomeBanner';

import '../styles/pages/Home.scss';

const Home = () => (
  <>
    <Hero />
    <MostSearchedCats />
    <HomeBanner />
  </>
);

export default Home;
