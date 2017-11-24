import PropTypes from 'prop-types';
import React from 'react';
import IMAGE_SIZES from '../constants/ImageConstants';
import getImageUrl from '../utils/ImageUtils';
import RelatedInfo from '../components/RelatedInfo'
import { MUSICIAN_PATH } from '../constants/RouterConstants';

const propTypes = {
  navigateTo: PropTypes.func.isRequired,
  album: PropTypes.shape({}).isRequired,
};

const AlbumMain = ({ navigateTo, album }) => {
  const { description, ngheSiPHs, name, releaseDate } = album;
  const avatarUrl = require('../images/defaultAlbum.png')

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
        <RelatedInfo
          title={'Musician\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={ngheSiPHs}
          path={MUSICIAN_PATH}
        />
        <div
          className="user-main__description"
          dangerouslySetInnerHTML={{
            __html: `${releaseDate ? `Release date ${releaseDate}<br />` : ''}
                     ${description ? `${description}` : ''}`
          }}
        />
      </div>
    </div>
  );
};

AlbumMain.propTypes = propTypes;

export default AlbumMain;
