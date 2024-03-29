import PropTypes from 'prop-types';
import React from 'react';
import AlbumListItem from '../components/AlbumListItem';

const defaultProps = {
  className: '',
  offsetIndex: 0,
  id: null,
  playingSongId: null,
};

const propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  isAuthenticated: PropTypes.bool.isRequired,
  likes: PropTypes.shape({}).isRequired,
  offsetIndex: PropTypes.number,
  login: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  player: PropTypes.shape({}).isRequired,
  playingSongId: PropTypes.number,
  playlist: PropTypes.string.isRequired,
  playSong: PropTypes.func.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleLike: PropTypes.func.isRequired,
};

const AlbumList = ({
  className,
  id,
  isAuthenticated,
  likes,
  login,
  navigateTo,
  offsetIndex,
  player,
  playingSongId,
  playlist,
  playSong,
  songs,
  toggleLike,
}) => (
    <div className={`song-list ${className}`}>
      {songs.map((song, i) => (song.id !== id
        ? (
          <AlbumListItem
            index={i + offsetIndex}
            isActive={playingSongId === song.id}
            isAuthenticated={isAuthenticated}
            key={song.id}
            liked={Boolean(song.id in likes && likes[song.id])}
            login={login}
            navigateTo={navigateTo}
            player={player}
            playlist={playlist}
            playSong={playSong}
            song={song}
            toggleLike={toggleLike}
          />
        ) : null
      ))}
    </div>
  );

AlbumList.defaultProps = defaultProps;
AlbumList.propTypes = propTypes;

export default AlbumList;
