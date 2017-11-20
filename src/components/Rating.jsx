import PropTypes from 'prop-types';
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const defaultProps = {
};

const propTypes = {
  id: PropTypes.string.isRequired,
  rateSong: PropTypes.func.isRequired,
};

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      idBaiHat: this.props.id,
      email: 'Garen@gmail.com',
    };
    this.onClick = this.onClick.bind(this);

  }

  onClick(nextValue, prevValue, name) {
    const { id, rateSong } = this.props;
    this.setState({
      value: nextValue
    })
    rateSong(this.state.email, id, nextValue);
  }

  render() {
    const { id } = this.props;

    return (
      <div className="stats__stat">
        <StarRatingComponent
          name={"rate" + id}
          starCount={5}
          value={this.state.value}
          onStarClick={this.onClick.bind(this)}
        />
      </div>
    );
  }
}

Rating.defaultProps = defaultProps;
Rating.propTypes = propTypes;

export default Rating;
