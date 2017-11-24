import PropTypes from 'prop-types';
import React from 'react';
import PlaylistListItem from '../components/PlaylistListItem';

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

const PlaylistList = ({
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
  memPlaylists,
  memberEmail,
  toggleLike,
}) => (
    <div className={`song-list ${className}`}>
      {memPlaylists.map((song, i) => (
        <PlaylistListItem
          index={i + offsetIndex}
          // isActive={playingSongId === song.id}
          isAuthenticated={isAuthenticated}
          memberEmail={memberEmail}
          // liked={Boolean(song.id in likes && likes[song.id])}
          login={login}
          navigateTo={navigateTo}
          player={player}
          playlist={playlist}
          playSong={playSong}
          song={song}
          toggleLike={toggleLike}
        />
      )
      )}
    </div>
  );

PlaylistList.defaultProps = defaultProps;
PlaylistList.propTypes = propTypes;

export default PlaylistList;
