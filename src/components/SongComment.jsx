import PropTypes from 'prop-types';
import React from 'react';
import IMAGE_SIZES from '../constants/ImageConstants';
import { formatSeconds } from '../utils/NumberUtils';
import getImageUrl from '../utils/ImageUtils';

const propTypes = {
  comment: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
};

const SongComment = ({ comment, index }) => {
  const { body, timestamp, email } = comment;
  const { avatarUrl, username } = email;

  return (
    <div className="song-comment" style={{ animationDelay: `${index * 50}ms` }}>
      <div
        className="song-comment__image"
        // TODO
        style={{ backgroundImage: `url(${getImageUrl(avatarUrl, IMAGE_SIZES.LARGE)})` }}
      />
      <div className="song-comment__main">
        <div className="song-comment__body">
          {body}
        </div>
        <div className="song-comment__email">
          {email}
        </div>
      </div>
      <div className="song-comment__time">
        {formatSeconds(timestamp)}
      </div>
    </div>
  );
};

SongComment.propTypes = propTypes;

export default SongComment;
