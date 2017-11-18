import PropTypes from 'prop-types';
import React from 'react';
// import UserFollowButton from '../components/UserFollowButton';
import IMAGE_SIZES from '../constants/ImageConstants';
import { addCommas } from '../utils/NumberUtils';
import getImageUrl from '../utils/ImageUtils';
// import { getSocialIcon, getLocation } from '../utils/UserUtils';

const propTypes = {
  isFollowing: PropTypes.bool.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleFollow: PropTypes.func.isRequired,
  album: PropTypes.shape({}).isRequired,
};

const AlbumMain = ({ isFollowing, profiles, toggleFollow, album }) => {
  const { avatarUrl, description, followersCount, name, birthdate } = album;

  return (
    <div className="user-main">
      <div className="user-main__avatar">
        <div
          className="user-main__avatar__image"
          style={{ backgroundImage: `url(${getImageUrl(avatarUrl, IMAGE_SIZES.LARGE)})` }}
        />
      </div>
      <div className="user-main__main">
        <div className="user-main__title">
          <div className="user-main__username">
            {name}
          </div>
        </div>
        <div
          className="user-main__description"
          dangerouslySetInnerHTML={{
            __html: `${birthdate ? `Birthdate ${birthdate}<br />` : ''}${description}`
          }}
        />
      </div>
    </div>
  );
};

AlbumMain.propTypes = propTypes;

export default AlbumMain;
