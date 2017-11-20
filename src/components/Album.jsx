import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SongList from '../components/SongList';
import Loader from '../components/Loader';
import stickyOnScroll from '../components/stickyOnScroll';
import AlbumMain from '../components/AlbumMain';

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

class Album extends Component {
  componentWillMount() {
    const { fetchAlbumIfNeeded, id, playlist, shouldFetchUser } = this.props;
    fetchAlbumIfNeeded(shouldFetchUser, id, playlist);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchAlbumIfNeeded, id } = this.props;
    if (nextProps.id !== id) {
      fetchAlbumIfNeeded(nextProps.shouldFetchUser, nextProps.id, nextProps.playlist);
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
      album,
    } = this.props;
    if (shouldFetchUser) {
      return <Loader className="loader--full" isLoading />;
    }

    return (
      <div className="container">
        <div className="user content">
          <div className="user__main">
            <AlbumMain
              isFollowing={isFollowing}
              profiles={profiles}
              toggleFollow={toggleFollow}
              album={album}
              navigateTo={navigateTo}
            />
            {!songs.length || !songs ? null :
              <div>
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
          </div>
        </div>
      </div>
    );
  }
}

Album.defaultProps = defaultProps;
Album.propTypes = propTypes;

export default stickyOnScroll(Album, 50);
