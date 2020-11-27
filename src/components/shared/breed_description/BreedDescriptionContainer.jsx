import React from 'react';
import {connect} from 'react-redux';

import BreedSearchActions from '../../../actions/BreedSearchActions';

import BreedDescription from './BreedDescription';
import BreedImagesContainer from './BreedImagesContainer';
import SpinnerIcon from '../../../assets/icons/SpinnerIcon';

class BreedDescriptionContainer extends React.Component {
  componentDidMount() {
    const {breedId, breeds, searchBreed} = this.props;
    const targetBreed = breeds[breedId];

    if (!targetBreed) {
      searchBreed({
        term: breedId,
        criteria: "breed_id",
        saveResults: false
      });
    }
  }

  render() {
    const {breedId, breeds, showDetails = false} = this.props;
    const targetBreed = breeds[breedId];

    if (targetBreed) {
      const {name, description, images} = targetBreed;

      return (
        <>
          <BreedDescription
            name={name}
            description={description}
            image={images[0]}
            attributes = {showDetails && targetBreed }/>
          {showDetails && <BreedImagesContainer breedId={breedId} />}
        </>
      )
    } else {
      return <SpinnerIcon className="loading-icon"/>;
    }
  }
}

const mapStateToProps = (reducers) => {
  return reducers.BreedsReducer;
}

export default connect(mapStateToProps, BreedSearchActions)(BreedDescriptionContainer);
