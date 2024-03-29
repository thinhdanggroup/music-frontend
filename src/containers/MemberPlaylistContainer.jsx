import React from 'react';
import { connect } from 'react-redux';
import MemberPlaylist from '../components/MemberPlaylist';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleFollow, toggleLike } from '../actions/SessionActions';
import fetchMemberPlaylistIfNeeded from '../actions/MemberPlaylistActions';
import { getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getId, getPlaylist, getShouldFetchUser, getSongs, getMemberPlaylist } from '../selectors/MemberPlaylistSelectors';

const PlaylistContainer = props => <MemberPlaylist {...props} />;

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
    memberPlaylist: getMemberPlaylist(state)
  };
};

const playSong = () => { }
const login = () => { }
const toggleFollow = () => { }
const toggleLike = () => { }

export default connect(mapStateToProps, {
  fetchMemberPlaylistIfNeeded,
  login,
  toggleFollow,
  toggleLike,
  navigateTo,
  playSong,
})(PlaylistContainer);
