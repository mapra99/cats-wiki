import React from 'react';

import '../../styles/components/home/HomeBanner.scss';

import kitty1 from '../../assets/images/kitty1.jpg';
import kitty2 from '../../assets/images/kitty2.jpg';
import kitty3 from '../../assets/images/kitty3.jpg';

const HomeBanner = () => (
  <div className='section home-banner'>
    <div className='col-content'>
      <div className='heading'>
        <hr className='headline-decorator' />
        <h1>Why should you have a cat?</h1>
      </div>

      <div className='description'>
        <p>
          Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
        </p>

        <a href='/' className='cta-link'>READ MORE &rarr;</a>
      </div>
    </div>

    <div className='col-images'>
      <div className='col-1'>
        <img className='kitty-img kitty-1' src={kitty1} alt='a cute cat' />
        <img className='kitty-img kitty-2' src={kitty2} alt='a cute cat' />
      </div>
      <div className='col-2'>
        <img className='kitty-img kitty-3' src={kitty3} alt='a cute cat' />
      </div>
    </div>
  </div>
);

export default HomeBanner;
