import PropTypes from 'prop-types';
import React, { Component } from 'react';
import HeartCount from '../components/HeartCount';
// import LoginPopoverPanel from '../components/LoginPopoverPanel';
// import Popover from '../components/Popover';
import StarRatingComponent from 'react-star-rating-component';
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
class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.song.avgRate,
      idBaiHat: this.props.id,
      email: 'Garen@gmail.com',
    };
    this.onClick = this.onClick.bind(this);
    
  }
  onClick(nextValue, prevValue, name) {
    const { id, liked, toggleLike } = this.props;
    this.setState({
      value: nextValue
    })
    this.props.toggleLike(this.state.email, id, nextValue);
  }

  render() {
    const { className, ratingCount, id , song, isAuthenticated, liked, login } = this.props;

    return (
      <div className="stats__stat">
        <StarRatingComponent
          name={"rate"+id} 
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
