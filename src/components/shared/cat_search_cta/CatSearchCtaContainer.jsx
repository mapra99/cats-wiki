import React from 'react';

import {connect} from 'react-redux';
import BreedSearchActions from '../../../actions/BreedSearchActions';

import Input from './Input';
import ErrorMessage from './ErrorMessage';
import Results from './Results';

import '../../../styles/components/shared/cat_search_cta/CatSearchCta.scss';

class CatSearchCtaContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      searchTerm: "",
    }
  }

  componentDidMount() {
    this.resetCta();
  }

  componentWillUnmount() {
    this.resetCta();
  }

  resetCta() {
    const {resetSearch} = this.props;
    resetSearch()

    this.setState({searchTerm: ""});
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

    searchBreed({term: searchTerm});
  }

  render() {
    const {breeds, searchResults, searchLoading, searchErrors, searchFinished} = this.props;
    const {searchTerm} = this.state;

    return (
      <div className='cat-search-cta'>
        <Input
          searchTerm={searchTerm}
          searchLoading={searchLoading}
          onSubmit={this.handleSearchSubmit}
          onChange={this.handleChange} />

        {searchErrors && <ErrorMessage />}
        {searchFinished && <Results searchResults={searchResults} breeds={breeds}/> }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return {...reducers.BreedSearchReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, BreedSearchActions)(CatSearchCtaContainer);
