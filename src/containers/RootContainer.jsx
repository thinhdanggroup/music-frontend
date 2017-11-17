import React from 'react';
import { connect } from 'react-redux';

import { initEnvironment } from '../actions/EnvironmentActions';
import { initRouter } from '../actions/RouterActions';
// import { initAuth } from '../actions/SessionActions';
import Root from '../components/Root';
import SongContainer from '../containers/SongContainer';
// import SongsContainer from '../containers/SongsContainer';
import MusicianContainer from '../containers/MusicianContainer';

import {
  INDEX_PATH,
  PLAYLIST_PATH,
  SONG_PATH,
  SONGS_PATH,
  USER_PATH,
  MUSICIAN_PATH,
  ALBUM_PATH,
} from '../constants/RouterConstants';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
    paths: [INDEX_PATH, PLAYLIST_PATH, SONG_PATH, SONGS_PATH, USER_PATH, MUSICIAN_PATH, ALBUM_PATH],
    router,
    routes: {
      // [INDEX_PATH]: SongsContainer,
      // [PLAYLIST_PATH]: SongsContainer,
      [SONG_PATH]: SongContainer,
      // [SONGS_PATH]: SongsContainer,
      // [USER_PATH]: UserContainer,
      [MUSICIAN_PATH]: MusicianContainer,
      [ALBUM_PATH]: SongContainer,
    },
  };
};

const initAuth = () => { }
export default connect(mapStateToProps, {
  initAuth,
  initEnvironment,
  initRouter,
})(RootContainer);
