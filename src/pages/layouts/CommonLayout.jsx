import React from 'react';
import {Link} from 'react-router-dom';
import '../../styles/pages/layouts/CommonLayout.scss';
import Logo from '../../components/shared/Logo';
import PageFooter from '../../components/shared/PageFooter';

const CommonLayout = ({ children }) => {
  const trackUserClick = () => {
    const {API_URL} = process.env;

    const formData = new FormData();
    formData.append('user_click[path_name]', window.location.href);
    formData.append('user_click[clicks_amount]', 1);

    fetch(`${API_URL}/user_clicks`, {
      method: 'POST',
      body: formData
    })
  }

  return (
    <div className='main' onClick={trackUserClick}>
      <div className='logo-wrap'>
        <Link to='/'>
          <Logo />
        </Link>
      </div>
      { children }
      <div className='footer-wrap'>
        <PageFooter />
      </div>
    </div>
  )
};

export default CommonLayout;
