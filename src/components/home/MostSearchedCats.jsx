import React from 'react';
import _ from 'underscore';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TopBreedsActions from '../../actions/TopBreedsActions';

import CatCard from '../shared/CatCard';

import '../../styles/components/home/MostSearchedCats.scss';

class MostSearchedCats extends React.Component{
  constructor(props) {
    super(props);

    this.renderHeading = this.renderHeading.bind(this);
    this.renderBreedCards = this.renderBreedCards.bind(this);
  }

  componentDidMount() {
    const {fetchTopBreeds, topResults} = this.props;
    if (topResults.length < 4) {
      fetchTopBreeds(4);
    }
  }

  renderBreedCards() {
    const {topResults, breeds} = this.props;
    const breedsSample = _.sample(topResults, 4);

    return (
      <ul className='top-cats-list'>
        {breedsSample.map(breed_id => (
          <CatCard
            key={breed_id}
            catName={breeds[breed_id].name}
            catImage={breeds[breed_id].images[0]}
            altAttribute={`Cute snapshot of a ${breeds[breed_id].name} cat`}/>
        ))}
      </ul>
    )
  }

  renderHeading() {
    return (
      <div className='heading'>
        <div className='heading-tab'>
          <span>Most Searched Breeds</span>
          <hr className='headline-decorator' />
        </div>

        <div className='heading-title'>
          <h1>66+ Breeds For you to discover</h1>
          <Link className='cta-link' to='/top-breeds'>SEE MORE &rarr;</Link>
        </div>
      </div>
    )
  }

  render() {
    const {finished} = this.props;

    return (
      <div className='section top-searches'>
        { this.renderHeading() }
        { finished && this.renderBreedCards() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return {...reducers.TopBreedsReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, TopBreedsActions)(MostSearchedCats);
