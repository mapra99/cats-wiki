import React from 'react';
import _ from 'underscore';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TopBreedsActions from '../../../actions/TopBreedsActions';

import Heading from './Heading'
import BreedCards from './BreedCards';

import '../../../styles/components/home/most_searched_cats/MostSearchedCatsContainer.scss';

class MostSearchedCats extends React.Component{
  componentDidMount() {
    const {fetchTopBreeds, topResults} = this.props;
    if (topResults.length < 4) {
      fetchTopBreeds(4);
    }
  }

  render() {
    const {finished, topResults, breeds} = this.props;
    const breedsSample = _.sample(topResults, 4);

    return (
      <div className='section top-searches'>
        <Heading />
        { finished && <BreedCards targetBreeds={breedsSample} breeds={breeds} />}
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return {...reducers.TopBreedsReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, TopBreedsActions)(MostSearchedCats);
