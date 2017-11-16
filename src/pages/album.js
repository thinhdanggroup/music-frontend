import React, { Component } from 'react'
import * as redux from '../redux'
class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      idBaiHat: '0000001',
      email: 'Garen@gmail.com',
      comment: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value + this.state.idBaiHat + this.state.email);
    redux.actions.postComment(this.state.email.toString(),this.state.value.toString(),this.state.idBaiHat.toString(),this.postComment);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <p> {this.state.comment} </p>
      </form>
    );
  }
  postComment(res) {
    // console.log(res)
    if (res.data.status === "Success")
    {
      this.setState ({
        comment: this.state.value
      });
    }
    else {
      if (res.data.data.code === '22000')
      {
        alert("Khong chuoi the nhe");
      }
    }
    // this.setState ({
    //   comment : noiDung
    // })
  }
}
class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moTa: null,
      namPhatHanh: null,
      ten: null,
      baiHats: null,
      ngheSiPHs: null
    };
    
    this.afterGetAlbum = this.afterGetAlbum.bind(this)
  }

  componentDidMount() {
    redux.actions.getAlbumById(this.props.match.params.idAlbum, this.afterGetAlbum)
  }
  componentWillMount() {
    // redux.actions.getAlbumById(this.props.match.params.idAlbum, this.afterGetAlbum)
  }

  render() {
    console.log(this.state.baiHats);
    const a = this.state.baiHats;
    var listItems = <li> chua co thong tin </li>
    if (a != null ){
      listItems = a.map((value,index) => 
      <li key={index}> ID bai hat: {value.ID} va Luot view: {value.LUOT_VIEW} </li>);
    }
    return (
      <div>
        <p> Ten Album : {this.state.ten} </p>
        <p> Thong tin : {this.state.moTa} </p>
        <p> {listItems} </p>
        <CommentForm />
      </div>
    )
  }
  afterGetAlbum(albumID) {
    console.log(albumID.data.status)
    if (albumID.data.status === 'Success') {
      this.setState(
        { 
          moTa: albumID.data.data.getalbumbyid.MO_TA,
          namPhatHanh: albumID.data.data.getalbumbyid.NAM_PHAT_HANH,
          ten: albumID.data.data.getalbumbyid.TEN,
          baiHats: albumID.data.data.getalbumbyid.baiHats,
          ngheSiPHs: albumID.data.data.getalbumbyid.ngheSiPHs
        });
      }

    
  }
}



export default Album