import PropTypes from 'prop-types';
import React from 'react';
import ArtworkPlay from '../components/ArtworkPlay';
import Stats from '../components/Stats';
import Waveform from '../components/Waveform';
import { MUSICIAN_PATH, ALBUM_PATH } from '../constants/RouterConstants';
import IMAGE_SIZES from '../constants/ImageConstants';
import getImageUrl from '../utils/ImageUtils';
import RelatedInfo from '../components/RelatedInfo'

const propTypes = {
  isActive: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  player: PropTypes.shape({}).isRequired,
  playlist: PropTypes.string.isRequired,
  playSong: PropTypes.func.isRequired,
  song: PropTypes.shape({}).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

const SongMain = ({
  isActive,
  isAuthenticated,
  liked,
  login,
  navigateTo,
  player,
  playlist,
  playSong,
  song,
  toggleLike,
}) => {
  const { isPlaying } = player;
  const {
    artworkUrl,
    commentCount,
    description,
    ratingCount,
    id,
    playbackCount,
    ngheSiSTs,
    ngheSiTDs,
    albums,
    genres,
    name,
  } = song;
  // const { avatarUrl, username } = user;

  genres.map((genre, i) => {
    genres[i].id = genre.name
  })

  return (
    <div className={`song-main ${isActive ? 'song-main--active' : ''}`}>
      <div className="song-main__artwork">
        <div
          className="song-main__artwork__image"
          style={{
            backgroundImage: `url(${getImageUrl(artworkUrl, IMAGE_SIZES.LARGE)})`,
          }}
        >
          <ArtworkPlay
            index={0}
            isActive={isActive}
            isPlaying={isPlaying}
            playlist={playlist}
            playSong={playSong}
          />
        </div>
      </div>
      <div className="song-main__main">
        <div className="song-main__title">
          {name}
        </div>
        <RelatedInfo
          title={'Album\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={albums}
          path={ALBUM_PATH}
        />
        <RelatedInfo
          title={'Composer\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={ngheSiSTs}
          path={MUSICIAN_PATH}
        />
        <RelatedInfo
          title={'Singer\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={ngheSiTDs}
          path={MUSICIAN_PATH}
        />
        <RelatedInfo
          title={'Genre\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          navigateTo={navigateTo}
          content={genres}
          path={MUSICIAN_PATH}
        />
        <Stats
          className="song-main__stats"
          commentCount={commentCount}
          ratingCount={ratingCount}
          id={id}
          isAuthenticated={isAuthenticated}
          liked={liked}
          login={login}
          playbackCount={playbackCount}
          toggleLike={toggleLike}
        />
        <div className="song-main__description">
          {description}
        </div>
      </div>
      <Waveform
        className="song-main__waveform"
        index={0}
        isActive={isActive}
        player={player}
        playlist={playlist}
        playSong={playSong}
        song={song}
      />
    </div>
  );
};

SongMain.propTypes = propTypes;

export default SongMain;
