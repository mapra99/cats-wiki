import React from 'react';

import {connect} from 'react-redux';
import BreedSearchActions from '../actions/BreedSearchActions';

import SearchIcon from '../assets/icons/SearchIcon';
import SpinnerIcon from '../assets/icons/SpinnerIcon';

import '../styles/components/CatSearchCta.scss';

class CatSearchCta extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchTerm: "",
    }
  }

  handleChange(event) {
    const {target} = event;
    this.setState({
      [target.name]: target.value
    })
  }

  handleSearchSubmit(event) {
    event.preventDefault();

    const {searchBreed} = this.props;
    const {searchTerm} = this.state;

    searchBreed(searchTerm);
  }

  renderErrorMessage() {
    const {searchErrors} = this.props;
    return searchErrors && (
      <div className='search-popup error-message'>
        There was an error. Please try again later.
      </div>
    )
  }
  
  renderResults() {
    const {searchResults, breeds} = this.props;

    if (searchResults.length === 0) {
      return (
        <div className='search-popup error-message'>
          No results found. Please try again with a different search term.
        </div>
      )
    } else {
      return (
        <ul className='search-popup search-results'>
          {searchResults.map(result_id => (
            <li className="breed-result" key={result_id}>{breeds[result_id].name}</li>
          ))}
        </ul>
      )
    }
  }

  renderInput() {
    const {searchTerm} = this.state;
    const {searchLoading} = this.props;

    return (
      <form onSubmit={this.handleSearchSubmit} className='input-wrap'>
        <input onChange={this.handleChange} type='text' placeholder='Enter your breed' name="searchTerm" value = {searchTerm} />
        <button className='button search-button' type='submit'>
          {searchLoading ?
            <SpinnerIcon className='icon loading-icon' /> :
            <SearchIcon className='icon search-icon' /> }
        </button>
      </form>
    )
  }

  render() {
    const {searchErrors, searchFinished} = this.props;

    return (
      <div className='cat-search-cta'>
        {this.renderInput()}
        {searchErrors && this.renderErrorMessage()}
        {searchFinished && this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return {...reducers.BreedSearchReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, BreedSearchActions)(CatSearchCta);
