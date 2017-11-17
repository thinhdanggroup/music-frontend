import PropTypes from 'prop-types';
import React, { Component } from 'react';

import AlbumList from '../components/AlbumList';
import SongList from '../components/SongList';
import Loader from '../components/Loader';
import stickyOnScroll from '../components/stickyOnScroll';
// import UserFollowings from '../components/UserFollowings';
import MusicianMain from '../components/MusicianMain';

const defaultProps = {
  playingSongId: null,
  user: null,
};

const propTypes = {
  fetchMusicianIfNeeded: PropTypes.func.isRequired,
  followings: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.string.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  likes: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  player: PropTypes.shape({}).isRequired,
  playingSongId: PropTypes.number,
  playlist: PropTypes.string.isRequired,
  playSong: PropTypes.func.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  shouldFetchUser: PropTypes.bool.isRequired,
  sidebarHeight: PropTypes.number.isRequired,
  sticky: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleFollow: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

class Musician extends Component {
  componentWillMount() {
    const { fetchMusicianIfNeeded, id, playlist, shouldFetchUser } = this.props;
    fetchMusicianIfNeeded(shouldFetchUser, id, playlist);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchMusicianIfNeeded, id } = this.props;
    if (nextProps.id !== id) {
      fetchMusicianIfNeeded(nextProps.shouldFetchUser, nextProps.id, nextProps.playlist);
    }
  }

  render() {
    const {
      followings,
      isAuthenticated,
      isFollowing,
      likes,
      login,
      navigateTo,
      player,
      playlist,
      playingSongId,
      playSong,
      profiles,
      shouldFetchUser,
      sidebarHeight,
      sticky,
      songs,
      toggleFollow,
      toggleLike,
      musician,
    } = this.props;
    if (shouldFetchUser) {
      return <Loader className="loader--full" isLoading />;
    }

    const albums = musician.artistAlbums

    return (
      <div className="container">
        <div className="user content">
          <div className="user__main">
            <MusicianMain
              isFollowing={isFollowing}
              profiles={profiles}
              toggleFollow={toggleFollow}
              musician={musician}
            />
            {!songs.length || !songs ? null :
              <div>
                <div className="user-main__username">
                  <br />
                  {'\xa0\xa0Song'}
                </div>
                <SongList
                  className="user__song-list"
                  isAuthenticated={isAuthenticated}
                  likes={likes}
                  login={login}
                  navigateTo={navigateTo}
                  player={player}
                  playingSongId={playingSongId}
                  playlist={playlist}
                  playSong={playSong}
                  songs={songs}
                  toggleLike={toggleLike}
                />
              </div>
            }
            {!albums.length || !albums ? null :
              <div className="user-main__username">
                <br />
                {'\xa0\xa0Album'}
                <AlbumList
                  className="user__song-list"
                  isAuthenticated={isAuthenticated}
                  likes={likes}
                  login={login}
                  navigateTo={navigateTo}
                  player={player}
                  playingSongId={playingSongId}
                  playlist={playlist}
                  playSong={playSong}
                  songs={albums}
                  toggleLike={toggleLike}
                />
              </div>
            }
          </div>
          {/* <div className="user__sidebar">
            <UserFollowings
              followings={followings}
              navigateTo={navigateTo}
              sidebarHeight={sidebarHeight}
              sticky={sticky}
            />
          </div> */}
        </div>
      </div>
    );
  }
}

Musician.defaultProps = defaultProps;
Musician.propTypes = propTypes;

export default stickyOnScroll(Musician, 50);
