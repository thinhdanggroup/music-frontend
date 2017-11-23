import PropTypes from 'prop-types';
import React from 'react';
import SidebarBody from '../components/SidebarBody';
import SongComment from '../components/SongComment';
import CommentForm from '../components/CommentForm';
import { SONG_PATH } from '../constants/RouterConstants';

const propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.number.isRequired,
  navigateTo: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  sidebarHeight: PropTypes.number.isRequired,
  sticky: PropTypes.bool.isRequired,
  timed: PropTypes.bool.isRequired,
  user: PropTypes.shape({}),
};

const SongComments = ({ isAuthenticated, comments, id, navigateTo, sidebarHeight, sticky, timed, postComment, user }) => (
  <div
    className={`sidebar ${sticky ? 'sidebar--sticky' : ''}`}
    style={{ height: `${sidebarHeight}px` }}
  >
    <div className="sidebar__header">
      <div className="sidebar__header__left">
        Comments
      </div>
      {/* <div className="sidebar__header__right">
          <Switch
            args={[{
              path: SONG_PATH,
              keys: { id },
              options: timed ? {} : { timed: '1' },
            }]}
            on={timed}
            onClick={navigateTo}
          />
        </div> */}
    </div>
    <CommentForm id={id} postComment={postComment} user={user} isAuthenticated={isAuthenticated} />
    <SidebarBody>
      {comments.map((comment, i) => (
        <SongComment
          comment={comment}
          key={comment.id}
          index={i}
          navigateTo={navigateTo}
        />
      ))}
    </SidebarBody>
  </div>
);

SongComments.propTypes = propTypes;

export default SongComments;
