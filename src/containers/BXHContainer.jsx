import React from 'react';
import { connect } from 'react-redux';
<<<<<<< HEAD
import Album from '../components/Album';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import fetchAlbumIfNeeded from '../actions/AlbumActions';
import { getId, getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getPlaylist, getShouldFetchUser, getSongs, getAlbum } from '../selectors/AlbumSelectors';

const BXHContainer = props => <Album {...props} />;
=======
import BXH from '../components/BXH';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import fetchBXHIfNeeded from '../actions/BXHActions';
import { getId, getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getPlaylist, getShouldFetchUser, getSongs, getAlbum } from '../selectors/AlbumSelectors';

const BXHContainer = props => <BXH {...props} />;
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe

const mapStateToProps = (state) => {
  const { player } = state;

  return {
<<<<<<< HEAD
    id: '0000001',
=======
    id: getId(state),
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe
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
<<<<<<< HEAD
  fetchAlbumIfNeeded,
=======
  fetchBXHIfNeeded,
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe
  login,
  toggleFollow,
  toggleLike,
  navigateTo,
  playSong,
})(BXHContainer);
