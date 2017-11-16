import React, { Component } from 'react'
import * as redux from '../redux'

class CaNhan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'garen@gmail.com',
      info: null
    }

    this.afterGetInfo = this.afterGetInfo.bind(this)
  }

  componentWillMount() {
    redux.actions.getInfoForPersonalPage(this.state.email, this.afterGetInfo)
  }

  render() {
    console.log(this.state.info)
    return (
      <div>
        PERSONAL PAGE
      </div>
    )
  }

  afterGetInfo(info) {
    this.setState({ info: info })
  }
}

export default CaNhan