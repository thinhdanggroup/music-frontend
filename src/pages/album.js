import React, { Component } from 'react'
import * as redux from '../redux'

class Album extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumID: null
    };

    this.afterGetAlbum = this.afterGetAlbum.bind(this)
  }

  componentWillMount() {
    redux.actions.getAlbumById(this.props.match.params.idAlbum, this.afterGetAlbum)
  }

  render() {
    console.log(this.state.albumID)
    return (
      <div>
        ALBUM
      </div>
    )
  }

  afterGetAlbum(albumID) {
    this.setState({ albumID: albumID })
  }
}

export default Album