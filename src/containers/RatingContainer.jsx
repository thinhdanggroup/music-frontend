import React from 'react';
import { connect } from 'react-redux';
import Rating from '../components/Rating';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import rateSong from '../actions/RatingActions';

const RatingContainer = props => <Rating {...props} />;

const mapStateToProps = (state) => {
  const { player } = state;

  return {
  };
};

export default connect(mapStateToProps, {
  rateSong,
})(RatingContainer);
