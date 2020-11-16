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

  renderErrorMessage() {
    const {searchErrors} = this.props;
    return searchErrors && (
      <div className='error-message'>
        There was an error. Please try again later.
      </div>
    )
  }
  
  renderResults() {
    const {searchResults} = this.props;

    return searchResults.length > 0 && (
      <ul className='search-results'>
        {searchResults.map(result => (
          <li className="breed-result" key={result.id}>{result.name}</li>
        ))}
      </ul>
    )
  }

  render() {
    const {searchLoading} = this.props;

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
        {this.renderErrorMessage()}
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.BreedsReducer;
}

export default connect(mapStateToProps, BreedsActions)(CatSearchCta);
