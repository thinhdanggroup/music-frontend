import React from 'react';
import { connect } from 'react-redux';
import Album from '../components/Album';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import fetchAlbumIfNeeded from '../actions/PlaylistAction';
import { getId, getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getPlaylist, getShouldFetchUser, getSongs, getAlbum } from '../selectors/PlaylistSelectors';

const PlaylistContainer = props => <Album {...props} />;

const mapStateToProps = (state) => {
  const { player } = state;

  return {
    id: getId(state),
    isAuthenticated: getIsAuthenticated(state),
    likes: getLikes(state),
    player,
    playingSongId: getPlayingSongId(state),
    playlist: getPlaylist(state),
    sidebarHeight: getSidebarHeight(state),
    shouldFetchUser: getShouldFetchUser(state),
    songs: getSongs(state),
    album: getAlbum(state)
  };
};

const playSong = () => { }
const login = () => { }
const toggleFollow = () => { }
const toggleLike = () => { }

export default connect(mapStateToProps, {
  fetchAlbumIfNeeded,
  login,
  toggleFollow,
  toggleLike,
  navigateTo,
  playSong,
})(PlaylistContainer);
