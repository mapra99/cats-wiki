import React from 'react';
import _ from 'underscore';

import {connect} from 'react-redux';
import TopBreedsActions from '../../actions/TopBreedsActions';

import CatCard from '../shared/CatCard';

import '../../styles/components/home/MostSearchedCats.scss';

class MostSearchedCats extends React.Component{
  constructor(props) {
    super(props);

    this.renderBreedCards = this.renderBreedCards.bind(this);
  }

  componentDidMount() {
    const {fetchTopBreeds} = this.props;
    fetchTopBreeds();
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

  render() {
    const {finished} = this.props;

    return (
      <div className='section top-searches'>
        <div className='heading'>
          <div className='heading-tab'>
            <span>Most Searched Breeds</span>
            <hr className='headline-decorator' />
          </div>

          <div className='heading-title'>
            <h1>66+ Breeds For you to discover</h1>
            <a className='cta-link' href='/'>SEE MORE &rarr;</a>
          </div>
        </div>

        { this.renderBreedCards() }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return {...reducers.TopBreedsReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, TopBreedsActions)(MostSearchedCats);
