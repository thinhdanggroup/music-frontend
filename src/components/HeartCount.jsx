import PropTypes from 'prop-types';
import React from 'react';
import { addCommas } from '../utils/NumberUtils';

const defaultProps = {
  ratingCount: null,
};

const propTypes = {
  ratingCount: PropTypes.number,
};

const HeartCount = ({ ratingCount }) => {
  if (ratingCount) {
    return (
      <div className="heart__count">
        {addCommas(ratingCount)}
      </div>
    );
  }

  return null;
};

HeartCount.defaultProps = defaultProps;
HeartCount.propTypes = propTypes;

export default HeartCount;
