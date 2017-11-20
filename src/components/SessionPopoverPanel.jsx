import PropTypes from 'prop-types';
import React from 'react';

import { MEM_PATH } from '../constants/RouterConstants';
import Link from '../components/Link'

const propTypes = {
  logout: PropTypes.func.isRequired,
};

const navigateToPersonalPage = (navigateTo, ) => {

}

const SessionPopoverPanel = ({ logout, navigateTo, user }) => (
  <div>
    <div
      className="popover__panel__item"
      onClick={() => navigateTo({
        path: MEM_PATH,
        keys: { email: user },
        options: {},
      })}
      role="button"
      tabIndex="0"
    >
      Personal Page
    </div>
    <div
      className="popover__panel__item"
      onClick={logout}
      role="button"
      tabIndex="0"
    >
      Logout
    </div>
  </div >
);

SessionPopoverPanel.propTypes = propTypes;

export default SessionPopoverPanel;
