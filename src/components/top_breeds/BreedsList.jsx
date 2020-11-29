import React from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';

import TopBreedsActions from '../../actions/TopBreedsActions';

import BreedDescriptionContainer from '../shared/breed_description/BreedDescriptionContainer';
import SpinnerIcon from '../../assets/icons/SpinnerIcon';

import '../../styles/components/top_breeds/BreedsList.scss';
class BreedsList extends React.Component {
  componentDidMount() {
    const {fetchTopBreeds, topResults} = this.props;
    if (topResults.length < 10) {
      fetchTopBreeds(10);
    }
  }

  renderList() {
    const {topResults} = this.props;
    return (
      <div className= "breed-list-wrap">
        {topResults.map((breedId) => {
          return (
          <Link to={`/breeds/${breedId}`} className="breed-link" key={breedId} >
            <BreedDescriptionContainer
              breedId={breedId}
              shortMode={true} />
          </Link>
        )})}
      </div>
    )
  }

  render() {
    const {finished, loading, errors} = this.props;

    return (
      <div className="section breeds-list">
        <h1>Top 10 most searched breeds</h1>
        {finished && this.renderList()}
        {loading && <SpinnerIcon className="loading-icon"/>}
        {errors && <Redirect to="/error" />}
      </div>
    );
  }
};

const mapStateToProps = (reducers) => {
  return {...reducers.TopBreedsReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, TopBreedsActions)(BreedsList);
