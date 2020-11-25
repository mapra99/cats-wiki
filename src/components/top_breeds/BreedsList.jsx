import React from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import TopBreedsActions from '../../actions/TopBreedsActions';

import BreedDescription from './BreedDescription';
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
    const {topResults, breeds} = this.props;
    return (
      <div className= "breed-list-wrap">
        {topResults.map((breedId, index) => {
          const {name, description, images} = breeds[breedId];
          return (
          <BreedDescription
            key={breedId}
            breedName={`${index+1}. ${name}`}
            breedDescription={description}
            breedImage={images[0]} />
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
