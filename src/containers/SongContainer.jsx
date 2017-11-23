import React from 'react';
import { connect } from 'react-redux';

import Song from '../components/Song';

import fetchSongIfNeeded from '../actions/SongActions';
// import { playSong } from '../actions/PlayerActions';
import { navigateTo } from '../actions/RouterActions';
// import { login, toggleLike } from '../actions/SessionActions';
import { getId, getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getComments, getPlaylist, getSong, getSongs, getTimed, getUser } from '../selectors/SongSelectors';
import { postComment } from '../actions/CommentActions'

const SongContainer = props => <Song {...props} />;

const mapStateToProps = (state) => {
  const { player, playlists } = state;

  return {
    comments: getComments(state),
    id: getId(state),
    isAuthenticated: getIsAuthenticated(state),
    likes: getLikes(state),
    player,
    playingSongId: getPlayingSongId(state),
    playlist: getPlaylist(state),
    playlists,
    sidebarHeight: getSidebarHeight(state),
    song: getSong(state),
    songs: getSongs(state),
    timed: getTimed(state),
    user: getUser(state),
  };
};

const login = () => { }
const playSong = () => { }
const toggleLike = () => { }

export default connect(mapStateToProps, {
  fetchSongIfNeeded,
  login,
  navigateTo,
  playSong,
  toggleLike,
  postComment
})(SongContainer);
