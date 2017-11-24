import PropTypes from 'prop-types';
import React from 'react';
import Heart from '../components/Heart';
import RatingContainer from '../containers/RatingContainer';
import { addCommas } from '../utils/NumberUtils';

const defaultProps = {
  className: '',
};

const propTypes = {
  className: PropTypes.string,
  commentCount: PropTypes.number.isRequired,
  ratingCount: PropTypes.number.isRequired,
  // id: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  playbackCount: PropTypes.number.isRequired,
  toggleLike: PropTypes.func.isRequired,
  // songs: PropTypes.number.isRequired,
};

const Stats = ({
  className,
  commentCount,
  id,
  isAuthenticated,
  ratingCount,
  liked,
  login,
  playbackCount,
  toggleLike,
  song
}) => (
    <div className={`stats ${className}`}>
      <Heart
        className="stats__stat stats__stat--heart"
        ratingCount={ratingCount}
        id={id}
        isAuthenticated={isAuthenticated}
        liked={liked}
        login={login}
        toggleLike={toggleLike}
        song={song}
      />
      <div className="stats__stat">
        <i className="stats__stat__icon ion-play" />
        <span className="stats__stat__text">
          {addCommas(playbackCount)}
        </span>
      </div>
      <div className="stats__stat">
        <i className="stats__stat__icon ion-chatbubble" />
        <span className="stats__stat__text">
          {addCommas(commentCount)}
        </span>
      </div>
      <RatingContainer
        id={id}
      />
    </div>
  );

Stats.defaultProps = defaultProps;
Stats.propTypes = propTypes;

export default Stats;
