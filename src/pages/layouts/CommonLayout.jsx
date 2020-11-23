import React from 'react';
import '../../styles/pages/layouts/CommonLayout.scss';
import Logo from '../../components/Logo';
import PageFooter from '../../components/PageFooter';

const CommonLayout = ({ children }) => (
  <div className='main'>
    <div className='logo-wrap'>
      <Logo />
    </div>
    { children }
    <div className='footer-wrap'>
      <PageFooter />
    </div>
  </div>
);

export default CommonLayout;
