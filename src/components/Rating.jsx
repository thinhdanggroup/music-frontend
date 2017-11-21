import PropTypes from 'prop-types';
import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { fetchRateBH} from '../actions/RatingActions';
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
        idBaiHat: this.props.id,
        email: this.props.user,
        cond: 1
    };
    this.onClick = this.onClick.bind(this);
    this.initRateBH = this.initRateBH.bind(this);
  }
  // componentDidMount() {
  //   const {fetchRateBH,id,user,isAuthenticated} = this.props;
  //   if (isAuthenticated){
  //   fetchRateBH(id,user);
  //   // }
  // }
  initRateBH(res) {
    
    if (res.data.data.getrateuser.soSao != null && this.state.cond == 1) {
        this.setState({
          value: res.data.data.getrateuser.soSao,
          cond: 0
        })
    }
    // console.log(res.data.data.getrateuser.soSao)
    // this.setState({
    //   value: this
    // })
  }
  // componentWillMount() {
  //   const {fetchRateBH,id,user,isAuthenticated} = this.props;
  //   if (isAuthenticated){
  //     fetchRateBH(id,user,);
  //   }
  // }
  componentDidUpdate() {
    const {id,user,isAuthenticated} = this.props;
    if (isAuthenticated){
      console.log(user);
      fetchRateBH(id,user,this.initRateBH);
    }
    console.log(user);
  }
  onClick(nextValue, prevValue, name) {
    const { id, rateSong } = this.props;
    this.setState({
      value: nextValue
    })
    rateSong(this.state.email, id, nextValue);
  }

  render() {
    const { id,entities ,songs,user} = this.props;
    // console.log(entities);
    // console.log(user);
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
