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
  fetchBXHIfNeeded: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  likes: PropTypes.shape({}).isRequired,
  login: PropTypes.func.isRequired,
  navigateTo: PropTypes.func.isRequired,
  player: PropTypes.shape({}).isRequired,
  playingSongId: PropTypes.number,
  playlist: PropTypes.string.isRequired,
  playSong: PropTypes.func.isRequired,
  // profiles: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  shouldFetchUser: PropTypes.bool.isRequired,
  sidebarHeight: PropTypes.number.isRequired,
  sticky: PropTypes.bool.isRequired,
  songs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  toggleFollow: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
  user: PropTypes.shape({}),
};

class BXH extends Component {
  componentWillMount() {
    const { fetchBXHIfNeeded, shouldFetchUser,playlist} = this.props;
    fetchBXHIfNeeded(shouldFetchUser,playlist);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchBXHIfNeeded,shouldFetchUser } = this.props;
    // if (nextProps.id !== id) {
      // fetchBXHIfNeeded(nextProps.shouldFetchUser, nextProps.id, nextProps.playlist);
    // }
    // fetchBXHIfNeeded(shouldFetchUser);
  }

  render() {
    const {
      // followings,
      isAuthenticated,
      // isFollowing,
      likes,
      login,
      navigateTo,
      player,
      playlist,
      playingSongId,
      playSong,
      // profiles,
      shouldFetchUser,
      sidebarHeight,
      sticky,
      songs,
      toggleFollow,
      toggleLike,
      album,
    } = this.props;
    if (!songs.length || !songs) {
      return <Loader className="loader--full" isLoading />;
    }

    return (
      <div className="container">
        <div className="user content">
          <div className="user__main">
            {/* <AlbumMain
              isFollowing={isFollowing}
              profiles={profiles}
              toggleFollow={toggleFollow}
              album={album}
              navigateTo={navigateTo}
            /> */}
            Real-time nhạc tuần này
            
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

BXH.defaultProps = defaultProps;
BXH.propTypes = propTypes;

export default stickyOnScroll(BXH, 50);
