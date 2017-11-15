import React, { Component } from 'react'
import * as redux from '../redux'

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
      </div>
    )
  }
  afterGetAlbum(albumID) {
    this.setState(
      { 
        moTa: albumID.data.data.getalbumbyid.MO_TA,
        namPhatHanh: albumID.data.data.getalbumbyid.NAM_PHAT_HANH,
        ten: albumID.data.data.getalbumbyid.TEN,
        baiHats: albumID.data.data.getalbumbyid.baiHats,
        ngheSiPHs: albumID.data.data.getalbumbyid.ngheSiPHs
      })
  }
}

export default Album