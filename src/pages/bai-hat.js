import React, { Component } from 'react'
import * as redux from '../redux'

class BaiHat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ten: null,
      memsEmail: null,
      selectedEmail: 'N/A',
      memPlaylistsName: null,
      selectedPlaylist: null
    }

    this.afterGetBaiHat = this.afterGetBaiHat.bind(this)
    this.afterGetMembersEmail = this.afterGetMembersEmail.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  componentWillMount() {
    const { idBaiHat } = this.props.match.params
    redux.actions.getBaiHatById(idBaiHat, this.afterGetBaiHat)
    redux.actions.getMembersEmail(this.afterGetMembersEmail)
  }

  render() {
    var emailItems = ''
    if (this.state.memsEmail != null) {
      emailItems = this.state.memsEmail.map(generateEmailItem)
    }

    return (
      <div>
        <p> BAI HAT PAGE </p>
        <p> Ten: {this.state.ten} </p>
        <p> Email: </p>
        <select onChange={this.handleEmailChange}>
          {emailItems}
        </select>
      </div >
    )
  }

  afterGetBaiHat(info) {
    console.log(info)
    const infoData = info.data.data.getbaihatbyid
    this.setState({ ten: infoData.title })
  }

  afterGetMembersEmail(info) {
    console.log(info)
    const infoData = info.data.data.getmembersemail
    this.setState({ memsEmail: infoData.membersEmail })
  }

  handleEmailChange(event) {
    this.setState({ selectedEmail: event.target.value })
  }
}

function generateEmailItem(emailObject) {
  var emailItems = <option key={emailObject.EMAIL} value={emailObject.EMAIL}> {emailObject.EMAIL} </option>
  return emailItems
}

export default BaiHat