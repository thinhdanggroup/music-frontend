import React, { Component } from 'react'
import * as redux from '../redux'

class CaNhan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'garen@gmail.com',
      hoTen: null,
      taiKhoan: null,
      playlists: null,
      rates: null
    }

    this.afterGetMemberInfo = this.afterGetMemberInfo.bind(this)
  }

  componentWillMount() {
    redux.actions.getInfoForPersonalPage(this.state.email, this.afterGetMemberInfo)
  }

  render() {
    var playlistItems = <li> N/A </li>
    if (this.state.playlists != null) {
      playlistItems = this.state.playlists.map((value, index) =>
        <li key={index}>
          Ten: {value.TEN} -
          Thoi diem tao: {value.THOI_DIEM_TAO} -
          Thoi diem cap nhat: {value.THOI_DIEM_CAP_NHAT}
        </li>)
    }

    var rateItems = <li> N/A </li>
    if (this.state.rates != null) {
      rateItems = this.state.rates.map((value, index) =>
        <li key={index}>
          Ten: {value.TEN} -
          So sao: {value.SO_SAO}
        </li>)
    }

    return (
      <div>
        <p> Personal Page </p>
        <p> Ho Ten: {this.state.hoTen} </p>
        <p> Tai khoan: {this.state.taiKhoan} </p>
        <p> Playlists: </p>
        <p> {playlistItems} </p>
        <p> Ratings: </p>
        <p> {rateItems} </p>
      </div>
    )
  }

  afterGetMemberInfo(info) {
    console.log(info)
    const infoData = info.data.data.getinfoforpersonalpage
    this.setState({
      hoTen: `${infoData.HO} ${infoData.TEN_LOT} ${infoData.TEN}`,
      taiKhoan: infoData.TAI_KHOAN,
      playlists: infoData.memPlaylists,
      rates: infoData.memRates
    })
  }
}

export default CaNhan