import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  login: PropTypes.func.isRequired,
};

const LoginPopoverPanel = ({ login }) => (
  <div>
    <div
      className="button button--orange button--block button--margin"
      onClick={login}
      role="button"
      tabIndex="0"
    >
      Garen@gmail.com
    </div>
    <div
      className="button button--orange button--block button--margin"
      onClick={login}
      role="button"
      tabIndex="0"
    >
      yasucmno@gmail.com
    </div>
  </div>

);

LoginPopoverPanel.propTypes = propTypes;

export default LoginPopoverPanel;
