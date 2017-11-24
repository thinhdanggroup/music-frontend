import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
};

const propTypes = {
  id: PropTypes.string.isRequired,
  postComment: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.shape({}),
};

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      idBaiHat: this.props.id,
      comment: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRes = this.handleRes.bind(this);
    this.clearCommentForm = this.clearCommentForm.bind(this);
  }
  handleRes(res) {
    // alert(res)
    if (res !== undefined) {
      if (res.status === "Success") {
        console.log("success");
      }
      else {
        if (res.data.data.code === '22000') {
          alert("Khong chuoi the nhe");
        }
      }
    }
  }
  clearCommentForm() {
    this.setState({ value: '' });
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var res = this.props.postComment(this.props.user.toString(), this.state.value.toString(), this.state.idBaiHat.toString());
    this.clearCommentForm();
    event.preventDefault();
  }

  render() {
    const { isAuthenticated, user } = this.props
    if (!isAuthenticated) {
      return null
    }

    if (!user) {
      return null
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input className="comment__Thinh" type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <p> {this.state.comment} </p>
      </form>
    );
  }
}

CommentForm.defaultProps = defaultProps;
CommentForm.propTypes = propTypes;

export default CommentForm;