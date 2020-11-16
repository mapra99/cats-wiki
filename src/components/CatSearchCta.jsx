import React from 'react';

import {connect} from 'react-redux';
import BreedsActions from '../actions/BreedsActions';

import SearchIcon from '../assets/icons/SearchIcon';
import SpinnerIcon from '../assets/icons/SpinnerIcon';

import '../styles/components/CatSearchCta.scss';

class CatSearchCta extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const {searchBreed} = this.props;
    const queryTerm = event.target.value;

    searchBreed(queryTerm);
  }

  render() {
    const {searchResults, searchLoading, searchErrors} = this.props;

    return (
      <div className='cat-search-cta'>
        <div className='input-wrap'>
          <input onChange={this.handleChange} type='text' placeholder='Enter your breed' />
          <button className='button search-button' type='button'>
            {searchLoading ?
              <SpinnerIcon className='icon loading-icon' /> :
              <SearchIcon className='icon search-icon' /> }
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.BreedsReducer;
}

export default connect(mapStateToProps, BreedsActions)(CatSearchCta);
