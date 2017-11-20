import PropTypes from 'prop-types';
import React from 'react';
import IMAGE_SIZES from '../constants/ImageConstants';
import getImageUrl from '../utils/ImageUtils';
import Info from '../components/Info'
import { MEM_PATH } from '../constants/RouterConstants';
import { formatSeconds } from '../utils/NumberUtils';

const propTypes = {
  navigateTo: PropTypes.func.isRequired,
  member: PropTypes.shape({}).isRequired,
};

const MemberMain = ({ navigateTo, member }) => {
  const { avatarUrl, HO, TEN, TENLOT, TAIKHOAN, memPlaylists } = member;

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
            {TAIKHOAN}
          </div>
        </div>
        <Info
          title={'Ten\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={[{
            name: HO + ' ' + TENLOT + ' ' + TEN
          }]}
          path={MEM_PATH}
        />
        <Info
          title={'Tai khoan\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={[{
            name: TAIKHOAN
          }]}
          path={MEM_PATH}
        />
      </div>
    </div>
  );
};

MemberMain.propTypes = propTypes;

export default MemberMain;
