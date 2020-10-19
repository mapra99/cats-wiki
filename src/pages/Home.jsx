import React from 'react';

import CommonLayout from './layouts/CommonLayout';
import Hero from '../components/Hero';

import '../styles/pages/Home.scss';

const Home = () => (
  <CommonLayout>
    <Hero />
  </CommonLayout>
);

export default Home;
