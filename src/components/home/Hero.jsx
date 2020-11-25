import React from 'react';

import Logo from '../shared/Logo';
import CatSearchCta from '../shared/CatSearchCta';
import ResponsiveImage from '../shared/ResponsiveImage';

import heroImageLarge from '../../assets/images/HeroImageLg.jpg';
import heroImageMedium from '../../assets/images/HeroImageMd.jpg';
import heroImageSmall from '../../assets/images/HeroImageSm.jpg';

import '../../styles/components/home/Hero.scss';

const Hero = () => (
  <div className='section hero'>
    <div className='bg-wrap'>
      <ResponsiveImage
        breakpointSize="768px"
        imageLarge={heroImageLarge}
        imageMedium={heroImageMedium}
        imageSmall={heroImageSmall}
        altAttribute='a cute kitty looking at the horizon' />
    </div>

    <div className='content'>
      <Logo />
      <h2>Get to know more about your cat breed</h2>
      <CatSearchCta />
    </div>
  </div>
);

export default Hero;
