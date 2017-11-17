import PropTypes from 'prop-types';
import React from 'react';
import ArtworkPlay from '../components/ArtworkPlay';
import Link from '../components/Link';
import Stats from '../components/Stats';
import Waveform from '../components/Waveform';
import { MUSICIAN_PATH, ALBUM_PATH } from '../constants/RouterConstants';
import IMAGE_SIZES from '../constants/ImageConstants';
import getImageUrl from '../utils/ImageUtils';

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
    title,
  } = song;
  // const { avatarUrl, username } = user;

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
          {title}
        </div>
        <div className="song-main__user">
          {'Album\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          {albums.map((album, i) => (
            <Link
              className="song-main__user__username"
              navigateTo={navigateTo}
              keys={{ id: album.id }}
              path={MUSICIAN_PATH}
            >
              {album.name}
            </Link>
          ))}
        </div>
        <div className="song-main__user">
          {'Composer\xa0\xa0\xa0\xa0'}
          {ngheSiSTs.map((composer, i) => (
            <Link
              className="song-main__user__username"
              navigateTo={navigateTo}
              keys={{ id: composer.id }}
              path={MUSICIAN_PATH}
            >
              {composer.name}
            </Link>
          ))}
        </div>
        <div className="song-main__user">
          {'Singer\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0'}
          {ngheSiSTs.map((composer, i) => (
            <Link
              className="song-main__user__username"
              navigateTo={navigateTo}
              keys={{ id: composer.id }}
              path={MUSICIAN_PATH}
            >
              {composer.name}
            </Link>
          ))}
        </div>
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
