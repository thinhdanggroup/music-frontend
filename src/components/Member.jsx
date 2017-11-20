import PropTypes from 'prop-types';
import React, { Component } from 'react';

import PlaylistList from '../components/PlaylistList';
import Loader from '../components/Loader';
import stickyOnScroll from '../components/stickyOnScroll';
import MemberMain from '../components/MemberMain';

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

class Member extends Component {
  componentWillMount() {
    const { fetchMemberIfNeeded, id, shouldFetchMember } = this.props;
    fetchMemberIfNeeded(shouldFetchMember, id);
  }

  componentWillReceiveProps(nextProps) {
    const { fetchMemberIfNeeded, id } = this.props;
    if (nextProps.id !== id) {
      fetchMemberIfNeeded(nextProps.shouldFetchMember, nextProps.id);
    }
  }

  render() {
    const {
      id,
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
      shouldFetchMember,
      sidebarHeight,
      sticky,
      toggleFollow,
      toggleLike,
      member,
    } = this.props;
    if (shouldFetchMember) {
      return <Loader className="loader--full" isLoading />;
    }

    const memPlaylists = member.memPlaylists
    memPlaylists.email = id

    return (
      <div className="container">
        <div className="user content">
          <div className="user__main">
            <MemberMain
              isFollowing={isFollowing}
              profiles={profiles}
              toggleFollow={toggleFollow}
              member={member}
              navigateTo={navigateTo}
            />
            {!memPlaylists.length || !memPlaylists ? null :
              <div>
                <PlaylistList
                  className="user__song-list"
                  isAuthenticated={isAuthenticated}
                  likes={likes}
                  login={login}
                  navigateTo={navigateTo}
                  player={player}
                  playingSongId={playingSongId}
                  playlist={playlist}
                  playSong={playSong}
                  memPlaylists={memPlaylists}
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

Member.defaultProps = defaultProps;
Member.propTypes = propTypes;

export default stickyOnScroll(Member, 50);
