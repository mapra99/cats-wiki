import React from 'react';

import Hero from '../components/home/Hero';
import MostSearchedCatsContainer from '../components/home/most_searched_cats/MostSearchedCatsContainer';
import HomeBanner from '../components/home/HomeBanner';

const Home = () => (
  <>
    <Hero />
    <MostSearchedCatsContainer />
    <HomeBanner />
  </>
);

export default Home;
