import React, { Component } from 'react'
import * as redux from '../redux'

class BaiHat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      ten: null,
      memsEmail: null,
      selectedEmail: '',
      emailChanged: 0,
      memPlaylistsName: null,
      selectedPlaylist: ''
    }

    this.afterGetBaiHat = this.afterGetBaiHat.bind(this)
    this.afterGetMembersEmail = this.afterGetMembersEmail.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.afterGetPlaylistsNameOfAMember = this.afterGetPlaylistsNameOfAMember.bind(this)
    this.handlePlaylistChange = this.handlePlaylistChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.afterAddSongToPlaylist = this.afterAddSongToPlaylist.bind(this)
  }

  componentWillMount() {
    const { idBaiHat } = this.props.match.params
    redux.actions.getBaiHatById(idBaiHat, this.afterGetBaiHat)
    redux.actions.getMembersEmail(this.afterGetMembersEmail)

  }

  componentDidUpdate() {
    if (this.state.emailChanged === 1) {
      redux.actions.getPlaylistsNameOfAMember(this.state.selectedEmail, this.afterGetPlaylistsNameOfAMember)
      this.setState({ emailChanged: 0 })
    }
  }

  render() {
    console.log(this.state.selectedPlaylist)
    var emailItems = ''
    if (this.state.memsEmail != null) {
      emailItems = this.state.memsEmail.map(generateEmailItem)
    }

    var playlistItems = ''
    if (this.state.memPlaylistsName != null) {
      playlistItems = this.state.memPlaylistsName.map(generatePlaylistItem)
    }

    return (
      <div>
        <p> BAI HAT PAGE </p>
        <p> Ten: {this.state.ten} </p>
        <p> Email: </p>
        <select value={this.state.selectedEmail} onChange={this.handleEmailChange}>
          <option value=''> Not chosen </option>
          {emailItems}
        </select>
        <p> Playlist: </p>
        <select value={this.state.selectedPlaylist} onChange={this.handlePlaylistChange}>
          <option value=''> Not chosen </option>
          {playlistItems}
        </select>
        <p> Them vao playlist </p>
        <form onSubmit={this.handleSubmit}>
          <input type='submit' value='OK' />
        </form>
      </div >
    )
  }

  afterGetBaiHat(info) {
    console.log(info)
    const infoData = info.data.data.getbaihatbyid
    this.setState({
      id: infoData.id,
      ten: infoData.title
    })
  }

  afterGetMembersEmail(info) {
    console.log(info)
    const infoData = info.data.data.getmembersemail
    this.setState({ memsEmail: infoData.membersEmail })
  }

  afterGetPlaylistsNameOfAMember(info) {
    console.log(info)
    const infoData = info.data.data.getplaylistsnameofamember
    this.setState({ memPlaylistsName: infoData.memPlaylistsName })
  }

  handleEmailChange(event) {
    this.setState({ emailChanged: 1 })
    this.setState({ selectedEmail: event.target.value })
  }

  handlePlaylistChange(event) {
    this.setState({ selectedPlaylist: event.target.value })
  }

  handleSubmit(event) {
    if (this.state.selectedEmail !== '' && this.state.selectedPlaylist !== '') {
      redux.actions.addSongToPlaylist(this.state.id, this.state.selectedPlaylist, this.state.selectedEmail, this.afterAddSongToPlaylist)
    }
    event.preventDefault();
  }

  afterAddSongToPlaylist() {
    alert('Added song to playlist ' + this.state.selectedPlaylist)
  }
}

function generateEmailItem(emailObject) {
  var emailItems = <option key={emailObject.EMAIL} value={emailObject.EMAIL}> {emailObject.EMAIL} </option>
  return emailItems
}

function generatePlaylistItem(playlistObject) {
  var playlistItems = <option key={playlistObject.TEN} value={playlistObject.TEN}> {playlistObject.TEN} </option>
  return playlistItems
}

export default BaiHat