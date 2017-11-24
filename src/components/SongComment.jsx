import PropTypes from 'prop-types';
import React from 'react';
import IMAGE_SIZES from '../constants/ImageConstants';
import { formatSeconds } from '../utils/NumberUtils';
import getImageUrl from '../utils/ImageUtils';
import Link from '../components/Link'
import { MEM_PATH } from '../constants/RouterConstants'

const propTypes = {
  comment: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
  navigateTo: PropTypes.func.isRequired,
};

const SongComment = ({ comment, index, navigateTo }) => {
  const { body, timestamp, email } = comment;
  // const { avatarUrl, username } = email;
  const avatarUrl = require('../images/defaultTV.png')

  return (
    <div className="song-comment" style={{ animationDelay: `${index * 50}ms` }}>
      <div
        className="song-comment__image"
        style={{ backgroundImage: `url(${getImageUrl(avatarUrl, IMAGE_SIZES.LARGE)})` }}
      />
      <div className="song-comment__main">
        <div className="song-comment__body">
          {body}
        </div>
        <Link
          className="song-comment__email"
          navigateTo={navigateTo}
          keys={{ email }}
          path={MEM_PATH}
        >
          {email}
        </Link>
      </div>
      <div className="song-comment__time">
        {formatSeconds(timestamp)}
      </div>
    </div>
  );
};

SongComment.propTypes = propTypes;

export default SongComment;
