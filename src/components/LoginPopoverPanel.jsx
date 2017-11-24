import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  login: PropTypes.func.isRequired,
};

class LoginPopoverPanel extends Component {
  render() {
    const { login } = this.props

    const emails = ['Garen@gmail.com', 'yasucmno@gmail.com']

    return (
      <div>
        {emails.map((email, i) => (
          <div
            className="button button--orange button--block button--margin"
            onClick={() => login(email)}
            role="button"
            tabIndex="0"
          >
            {email}
          </div>
        ))}
      </div>

    )
  }
}

LoginPopoverPanel.propTypes = propTypes;

export default LoginPopoverPanel;
