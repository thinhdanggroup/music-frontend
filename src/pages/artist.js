import React, { Component } from 'react'
import * as redux from '../redux'

class Artist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ten: null,
      moTa: null,
      ngaySinh: null,
      albums: null,
      songs: null
    }

    this.afterGetArtistInfo = this.afterGetArtistInfo.bind(this)
  }

  componentWillMount() {
    const { artistId } = this.props.match.params
    redux.actions.getInfoForArtistPage(artistId, this.afterGetArtistInfo)
  }

  render() {

    var albumItems = <li> N/A </li>
    if (this.state.albums != null) {
      albumItems = this.state.albums.map((value, index) =>
        <li key={index}>
          Ten: {value.TEN} -
          Nam phat hanh: {value.NAM_PHAT_HANH}
        </li>)
    }

    var songItems = <li> N/A </li>
    if (this.state.songs != null) {
      songItems = this.state.songs.map((value, index) =>
        <li key={index}>
          Ten: {value.TEN} -
          Luot tai: {value.LUOT_TAI} -
          Luot view: {value.LUOT_VIEW}
        </li>)
    }

    return (
      <div>
        <p> Artist Page </p>
        <p> Ten: {this.state.ten} </p>
        <p> Mo ta: {this.state.moTa} </p>
        <p> Ngay sinh: {this.state.ngaySinh} </p>
        <p> Albums: </p>
        <p> {albumItems} </p>
        <p> Songs: </p>
        <p> {songItems} </p>
      </div>
    )
  }

  afterGetArtistInfo(info) {
    console.log(info)
    const infoData = info.data.data.getinfoforartistpage
    this.setState({
      ten: infoData.TEN,
      moTa: infoData.MO_TA,
      ngaySinh: infoData.NGAY_SINH,
      albums: infoData.artistAlbums,
      songs: infoData.artistSongs
    })
  }
}

export default Artist