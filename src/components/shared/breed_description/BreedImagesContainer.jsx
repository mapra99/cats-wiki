import React from 'react';
import {connect} from 'react-redux';
import _ from 'underscore';

import BreedSearchActions from '../../../actions/BreedSearchActions';

import BreedImages from './BreedImages';
import SpinnerIcon from '../../../assets/icons/SpinnerIcon';

class BreedImagesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    const {breedId, breeds, searchBreed} = this.props;
    const targetBreed = breeds[breedId];

    if (!targetBreed || targetBreed.images.length < 8) {
      searchBreed({
        term: breedId,
        criteria: "breed_id",
        saveResults: false,
        imagesLimit: 8
      }).then(() => this.setState({loading: false}));
    }
  }

  render() {
    const {breedId, breeds} = this.props;
    const {loading} = this.state;
    const targetBreed = breeds[breedId];

    if (loading) return <SpinnerIcon className="loading-icon"/>;

    return <BreedImages images={_.sample(targetBreed.images, 8)}/>
  }
}

const mapStateToProps = (reducers) => {
  return {...reducers.BreedsReducer, ...reducers.BreedSearchReducer};
}

export default connect(mapStateToProps, BreedSearchActions)(BreedImagesContainer);
