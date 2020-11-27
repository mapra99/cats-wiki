import React from 'react';
import {Link} from 'react-router-dom';

import '../../../styles/components/home/most_searched_cats/Heading.scss';

const Heading = () => (
  <div className='heading'>
    <div className='heading-tab'>
      <span>Most Searched Breeds</span>
      <hr className='headline-decorator' />
    </div>

    <div className='heading-title'>
      <h1>66+ Breeds For you to discover</h1>
      <Link className='cta-link' to='/top-breeds'>SEE MORE &rarr;</Link>
    </div>
  </div>
)

export default Heading;
