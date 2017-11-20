import React from 'react';
import { connect } from 'react-redux';

import { initEnvironment } from '../actions/EnvironmentActions';
import { initRouter } from '../actions/RouterActions';
// import { initAuth } from '../actions/SessionActions';
import Root from '../components/Root';
import SongContainer from '../containers/SongContainer';
// import SongsContainer from '../containers/SongsContainer';
import MusicianContainer from '../containers/MusicianContainer';
import AlbumContainer from '../containers/AlbumContainer';
import MemberPlaylistContainer from '../containers/MemberPlaylistContainer';
import BXHContainer from '../containers/BXHContainer';
<<<<<<< HEAD

=======
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe
import {
  INDEX_PATH,
  PLAYLIST_PATH,
  SONG_PATH,
  SONGS_PATH,
  USER_PATH,
  MUSICIAN_PATH,
  ALBUM_PATH,
  MEMBER_PLAYLIST_PATH,
<<<<<<< HEAD
  BXH_PATH
=======
  BXH_PATH,
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe
} from '../constants/RouterConstants';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = (state) => {
  const { router } = state;

  return {
    paths: [
      INDEX_PATH,
      PLAYLIST_PATH,
      SONG_PATH,
      SONGS_PATH,
      USER_PATH,
      MUSICIAN_PATH,
      ALBUM_PATH,
      MEMBER_PLAYLIST_PATH,
<<<<<<< HEAD
      BXH_PATH
=======
      BXH_PATH,
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe
    ],
    router,
    routes: {
      // [INDEX_PATH]: SongsContainer,
      // [PLAYLIST_PATH]: SongsContainer,
      [SONG_PATH]: SongContainer,
      // [SONGS_PATH]: SongsContainer,
      // [USER_PATH]: UserContainer,
      [MUSICIAN_PATH]: MusicianContainer,
      [ALBUM_PATH]: AlbumContainer,
      [MEMBER_PLAYLIST_PATH]: MemberPlaylistContainer,
<<<<<<< HEAD
      [BXH_PATH] : BXHContainer
=======
      [BXH_PATH] : BXHContainer,
>>>>>>> 03616af847cc54582e70babab35ccc2716161ffe
    },
  };
};

const initAuth = () => { }
export default connect(mapStateToProps, {
  initAuth,
  initEnvironment,
  initRouter,
})(RootContainer);
