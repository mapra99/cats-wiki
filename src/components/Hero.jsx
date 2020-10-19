import React from 'react';

import Logo from './Logo';
import CatSearchCta from './CatSearchCta';

import heroImageLarge from '../assets/images/HeroImageLg.jpg';
import heroImageMedium from '../assets/images/HeroImageMd.jpg';
import heroImageSmall from '../assets/images/HeroImageSm.jpg';

import '../styles/components/Hero.scss';

const Hero = () => (
  <div className='hero'>
    <div className='bg-wrap'>
      <picture>
        <source media='(min-width: 768px)' srcSet={`${heroImageMedium} 1x, ${heroImageLarge} 2x`} />
        <source media='(max-width: 767px)' srcSet={`${heroImageSmall} 1x, ${heroImageMedium} 2x`} />
        <img src={heroImageMedium} alt='a cute kitty looking at the horizon' />
      </picture>
    </div>

    <div className="content">
      <Logo />
      <h2>Get to know more about your cat breed</h2>
      <CatSearchCta />
    </div>
  </div>
);

export default Hero;
