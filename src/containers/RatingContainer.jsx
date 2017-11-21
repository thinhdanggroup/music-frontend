import React from 'react';
import { connect } from 'react-redux';
import Rating from '../components/Rating';
import { navigateTo } from '../actions/RouterActions';
import { rateSong, fetchRateBH } from '../actions/RatingActions';
import { getSongs, getIsAuthenticated, getNewStreamSongs, getSessionUser, getShowLikes, getShowPlaylist, getShowStream } from '../selectors/CommonSelectors';
const RatingContainer = props => <Rating {...props} />;

const mapStateToProps = (state) => {
  const { player } = state;

  return {
    entities: state.entities.songs,
    isAuthenticated: getIsAuthenticated(state),
    user: getSessionUser(state),
  };
};

export default connect(mapStateToProps, {
  rateSong,
  fetchRateBH,
})(RatingContainer);
