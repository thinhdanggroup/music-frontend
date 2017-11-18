import PropTypes from 'prop-types';
import React from 'react';
import SidebarBody from '../components/SidebarBody';
import SongComment from '../components/SongComment';
// import Switch from '../components/Switch';
import { SONG_PATH } from '../constants/RouterConstants';
import  {postComment}  from '../actions/CommentActions';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      idBaiHat: this.props.id,
      email: 'Garen@gmail.com',
      comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRes = this.handleRes.bind(this);
  }
  handleRes(res) {
    console.log(res)
    if (res.status === "Success")
    {
      // this.setState ({
      //   comment: this.state.value
      // });
      window.location.reload();
    }
    else {
      if (res.data.data.code === '22000')
      {
        alert("Khong chuoi the nhe");
      }
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value + this.state.idBaiHat + this.state.email);
    console.log(this.state.value);
    this.props.postComment(this.state.email.toString(),this.state.value.toString(),this.state.idBaiHat.toString());
    // this.handleRes(this.props.postComment(this.state.email.toString(),this.state.value.toString(),this.state.idBaiHat.toString()));
    // postComment(this.state.email.toString(),this.state.value.toString(),this.state.idBaiHat.toString(),this.handleRes);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input className = "comment__Thinh" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        {/* <input type="submit" value="Submit" /> */}
        {/* <p> {this.state.comment} </p> */}
      </form>
    );
  }
  
}
const propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  id: PropTypes.number.isRequired,
  navigateTo: PropTypes.func.isRequired,
  sidebarHeight: PropTypes.number.isRequired,
  sticky: PropTypes.bool.isRequired,
  timed: PropTypes.bool.isRequired,
};

const SongComments = ({ comments, id, navigateTo, sidebarHeight, sticky, timed ,postComment}) => (
  <div
    className={`sidebar ${sticky ? 'sidebar--sticky' : ''}`}
    style={{ height: `${sidebarHeight}px` }}
  >
    <div className="sidebar__header">
      <div className="sidebar__header__left">
        Comments
      </div>
      {/* <div className="sidebar__header__right">
          <Switch
            args={[{
              path: SONG_PATH,
              keys: { id },
              options: timed ? {} : { timed: '1' },
            }]}
            on={timed}
            onClick={navigateTo}
          />
        </div> */}
    </div>
    <SidebarBody>
      {comments.map((comment, i) => (
        <SongComment
          comment={comment}
          key={comment.id}
          index={i}
        />
      ))}
    </SidebarBody>
    {/* <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p> {this.state.comment} </p>
    </form>  */}
    <CommentForm id = {id} postComment= {postComment} />
  </div>
);

SongComments.propTypes = propTypes;

export default SongComments;
