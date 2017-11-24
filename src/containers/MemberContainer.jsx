import React from 'react';
import { connect } from 'react-redux';
import Member from '../components/Member';
import { navigateTo } from '../actions/RouterActions';
import fetchMemberIfNeeded from '../actions/MemberActions';
import { getIsAuthenticated, getLikes, getPlayingSongId, getSidebarHeight } from '../selectors/CommonSelectors';
import { getId, getShouldFetchMember, getMember } from '../selectors/MemberSelectors';

const MemberContainer = props => <Member {...props} />;

const mapStateToProps = (state) => {
  const { player } = state;

  return {
    id: getId(state),
    isAuthenticated: getIsAuthenticated(state),
    likes: getLikes(state),
    player,
    playingSongId: getPlayingSongId(state),
    sidebarHeight: getSidebarHeight(state),
    shouldFetchMember: getShouldFetchMember(state),
    member: getMember(state)
  };
};


const playSong = () => { }
const login = () => { }
const toggleFollow = () => { }
const toggleLike = () => { }

export default connect(mapStateToProps, {
  fetchMemberIfNeeded,
  login,
  toggleFollow,
  toggleLike,
  navigateTo,
  playSong,
})(MemberContainer);
