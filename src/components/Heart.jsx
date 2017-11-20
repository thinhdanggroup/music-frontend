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
class Rating extends React.Component {
  constructor() {
      super();

      this.state = {
          rating: 1
      };
  }
  
  onStarClick(nextValue, prevValue, name) {
      this.setState({rating: nextValue});
  }

  render() {
      const { rating } = this.state;
      return (                
          <div>
              <p>Rating from state: {rating}</p>
              <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={rating}
                  onStarClick={this.onStarClick.bind(this)}
              />
          </div>
      );
  }
}
class Heart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.song.avgRate,
      idBaiHat: this.props.id,
      email: 'Garen@gmail.com',
    };
    this.onClick = this.onClick.bind(this);
    // this.renderRating = this.renderRating.bind(this);
  }
  // renderRating() {
  //   return (
  //     <Rating />
  //   )
  //   // alert(1);
  // }
  onClick(nextValue, prevValue, name) {
    const { id, liked, toggleLike } = this.props;
    // this.renderRating();
    this.setState({
      value: nextValue
    })
    this.props.toggleLike(this.state.email, id, nextValue);
  }

  render() {
    const { className, ratingCount, id , song, isAuthenticated, liked, login } = this.props;
    // if (!isAuthenticated) {
      // return (
      //   <Popover className={`heart ${className}`} >
      //     <div className="heart__inner">
      //       <i className="heart__icon ion-ios-heart" />
      //       <HeartCount ratingCount={ratingCount} />
      //     </div>
      //     <LoginPopoverPanel login={login} />
      //   </Popover>
      // );
    // }

    return (
      <div className={`heart ${liked ? 'heart--liked' : ''} ${className} `}>
        <div
          className="heart__inner"
          onClick={this.onClick}
          role="button"
          tabIndex="0"
        >
          <i className="heart__icon ion-ios-star" />
          <HeartCount ratingCount={song.avgRate} />
        </div>
      </div>
      // <StarRatingComponent 
      //   name="rate1" 
      //   starCount={5}
      //   value={this.state.value}
      //   onStarClick={this.onClick.bind(this)}
      // />
    );
  }
}

Heart.defaultProps = defaultProps;
Heart.propTypes = propTypes;

export default Heart;
