import React, { Component } from 'react'
import * as redux from '../redux'

class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Nhac hay thang 11',
      email: 'garen@gmail.com',
      taiKhoan: null,
      noiDung: null,
      thoiDiemTao: null,
      thoiDiemCapNhat: null,
      songs: null,
    }

    this.afterGetPlaylistInfo = this.afterGetPlaylistInfo.bind(this)
  }

  componentWillMount() {
    redux.actions.getInfoForPlaylistPage(this.state.name, this.state.email, this.afterGetPlaylistInfo)
  }

  render() {

    var songItems = <li> N/A </li>
    if (this.state.songs != null) {
      console.log(this.state.songs)
      songItems = this.state.songs.map(generateSongInfo)
    }

    return (
      <div>
        <p> Playlist Page </p>
        <p> Ten playlist: {this.state.name} </p>
        <p> Tai khoan: {this.state.taiKhoan} </p>
        <p> Gioi thieu: {this.state.noiDung} </p>
        <p> Thoi diem tao: {this.state.thoiDiemTao} </p>
        <p> Thoi diem cap nhat: {this.state.thoiDiemCapNhat} </p>
        <p> Songs: </p>
        <p> {songItems} </p>
      </div>
    )
  }

  afterGetPlaylistInfo(info) {
    console.log(info)
    const infoData = info.data.data.getinfoforplaylistpage
    this.setState({
      taiKhoan: infoData.TAI_KHOAN,
      noiDung: infoData.NOI_DUNG_GIOI_THIEU,
      thoiDiemTao: infoData.THOI_DIEM_TAO,
      thoiDiemCapNhat: infoData.THOI_DIEM_CAP_NHAT,
      songs: infoData.playlistSongs
    })
  }


}

function generateSongInfo(songObject) {
  var artists
  if (songObject.NGHE_SI.length > 0) {
    artists = songObject.NGHE_SI[0].TEN_NGHE_SI
    for (var artistIndex = 1; artistIndex < songObject.NGHE_SI.length; artistIndex++) {
      artists += songObject.NGHE_SI[artistIndex].TEN_NGHE_SI
    }
  }
  else {
    artists = "N/A"
  }
  var songInfo = <li key={songObject.IDBH} >
    Ten: {songObject.TEN_BH} -
    Nghe si: {artists}
  </li >
  return songInfo
}

export default Playlist