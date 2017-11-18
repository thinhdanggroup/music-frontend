import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from '../components/Link';

const defaultProps = {
  style: {
    fontSize: 9
  }
};

const propTypes = {
  title: PropTypes.shape({}).isRequired,
  content: PropTypes.number.isRequired,
  path: PropTypes.string.isRequired,
  style: PropTypes.shape({}),
  navigateTo: PropTypes.func.isRequired,
};

class Info extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { title, content, path, style, navigateTo } = this.props
    return (
      <div className="song-main__user" >
        <div style={style}>
          {title}
        </div>
        {content.map((element, i) => (
          <div style={style}>
            {element.name + (i + 1 != content.length ? ',\xa0' : '')}
          </div>
        ))}
      </div>
    )
  }
}
Info.defaultProps = defaultProps;
Info.propTypes = propTypes;

export default Info;