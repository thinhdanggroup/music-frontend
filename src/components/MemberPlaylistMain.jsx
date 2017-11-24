import PropTypes from 'prop-types';
import React from 'react';
import IMAGE_SIZES from '../constants/ImageConstants';
import getImageUrl from '../utils/ImageUtils';
import Info from '../components/Info'
import { MUSICIAN_PATH } from '../constants/RouterConstants';
import { formatSeconds } from '../utils/NumberUtils';

const propTypes = {
  navigateTo: PropTypes.func.isRequired,
  memberPlaylist: PropTypes.shape({}).isRequired,
};

const MemberPlaylistMain = ({ navigateTo, memberPlaylist }) => {
  const { description, name, dateCreated, dateModified, email } = memberPlaylist;

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
        <Info
          title={'Owner\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={[{
            name: email
          }]}
          path={MUSICIAN_PATH}
        />
        <Info
          title={'Created\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={[{
            name: formatSeconds(dateCreated)
          }]}
          path={MUSICIAN_PATH}
        />
        <Info
          title={'Modified\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={[{
            name: formatSeconds(dateModified)
          }]}
          path={MUSICIAN_PATH}
        />
        <div
          className="user-main__description"
          dangerouslySetInnerHTML={{
            __html: `${description ? `${description}` : ''}`
          }}
        />
      </div>
    </div>
  );
};

MemberPlaylistMain.propTypes = propTypes;

export default MemberPlaylistMain;
