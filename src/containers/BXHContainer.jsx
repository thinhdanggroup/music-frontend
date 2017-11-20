import React from 'react';
import { connect } from 'react-redux';
import BXH from '../components/BXH';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import fetchBXHIfNeeded from '../actions/BXHActions';
import { getId, getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getPlaylist, getShouldFetchUser, getSongs, getAlbum } from '../selectors/AlbumSelectors';

const BXHContainer = props => <BXH {...props} />;

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
// const toggleLike = () => { }

export default connect(mapStateToProps, {
  fetchBXHIfNeeded,
  login,
  toggleFollow,
  toggleLike,
  navigateTo,
  playSong,
})(BXHContainer);
