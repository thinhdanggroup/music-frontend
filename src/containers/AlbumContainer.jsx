import React from 'react';
import { connect } from 'react-redux';
import Album from '../components/Album';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import fetchAlbumIfNeeded from '../actions/MusicianActions';
import { getId, getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getFollowings, getIsFollowing, getPlaylist, getProfiles, getShouldFetchUser, getSongs, getUser, getMusician } from '../selectors/AlbumSelectors';

const AlbumContainer = props => <Album {...props} />;

const mapStateToProps = (state) => {
  const { player } = state;

  return {
    followings: getFollowings(state),
    id: getId(state),
    isAuthenticated: getIsAuthenticated(state),
    isFollowing: getIsFollowing(state),
    likes: getLikes(state),
    player,
    playingSongId: getPlayingSongId(state),
    playlist: getPlaylist(state),
    profiles: getProfiles(state),
    sidebarHeight: getSidebarHeight(state),
    shouldFetchUser: getShouldFetchUser(state),
    songs: getSongs(state),
    user: getUser(state),
    musician: getMusician(state)
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
})(AlbumContainer);
