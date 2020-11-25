import React from 'react';

import {connect} from 'react-redux';
import TopBreedsActions from '../../actions/TopBreedsActions';

class BreedsList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchTopBreeds, topResults} = this.props;
    if (topResults.length < 10) {
      fetchTopBreeds(10);
    }
  }

  renderList() {
    const {topResults} = this.props;

    return (
      <div>
        {topResults.map(topBreed => (
          <p>{topBreed}</p>
        ))}
      </div>
    )
  }

  render() {
    const {finished} = this.props;
    return (
      <div className="section breeds-list">
        <h1>Top 10 most searched breeds</h1>
        {finished && this.renderList()}
      </div>
    );
  }
};

const mapStateToProps = (reducers) => {
  return {...reducers.TopBreedsReducer, ...reducers.BreedsReducer};
}

export default connect(mapStateToProps, TopBreedsActions)(BreedsList);
