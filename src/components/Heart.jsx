import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HeartCount from '../components/HeartCount';
// import LoginPopoverPanel from '../components/LoginPopoverPanel';
// import Popover from '../components/Popover';

const defaultProps = {
  className: '',
  ratingCount: null,
};

const propTypes = {
  className: PropTypes.string,
  ratingCount: PropTypes.number,
  id: PropTypes.number.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  liked: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  toggleLike: PropTypes.func.isRequired,
};

class Heart extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { id, liked, toggleLike } = this.props;
    toggleLike(id, !liked);
  }

  render() {
    const { className, ratingCount, isAuthenticated, liked, login } = this.props;
    if (!isAuthenticated) {
      // return (
      //   <Popover className={`heart ${className}`} >
      //     <div className="heart__inner">
      //       <i className="heart__icon ion-ios-heart" />
      //       <HeartCount ratingCount={ratingCount} />
      //     </div>
      //     <LoginPopoverPanel login={login} />
      //   </Popover>
      // );
    }

    return (
      <div className={`heart ${liked ? 'heart--liked' : ''} ${className} `}>
        <div
          className="heart__inner"
          onClick={this.onClick}
          role="button"
          tabIndex="0"
        >
          <i className="heart__icon ion-ios-heart" />
          <HeartCount ratingCount={ratingCount} />
        </div>
      </div>
    );
  }
}

Heart.defaultProps = defaultProps;
Heart.propTypes = propTypes;

export default Heart;
