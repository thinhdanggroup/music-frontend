import PropTypes from 'prop-types';
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { fetchRateBH } from '../actions/RatingActions';
const defaultProps = {
};

const propTypes = {
  id: PropTypes.string.isRequired,
};

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      fetchedComment: false
    };
    this.onClick = this.onClick.bind(this);
    this.initRateBH = this.initRateBH.bind(this);
  }

  initRateBH(res) {
    if (res.data.data.getrateuser != null) {
      this.setState({
        value: res.data.data.getrateuser.soSao,
        fetchedComment: true
      })
    }
  }

  componentDidUpdate() {
    const { id, user, isAuthenticated } = this.props;
    if (isAuthenticated && !this.state.fetchedComment) {
      fetchRateBH(id, user, this.initRateBH);
    }
  }

  onClick(nextValue, prevValue, name) {
    const { id, rateSong, user } = this.props;

    this.setState({
      value: nextValue
    })

    rateSong(user, id, nextValue);
  }

  render() {
    const { id, isAuthenticated } = this.props;
    if (!isAuthenticated) {
      return null
    }

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
