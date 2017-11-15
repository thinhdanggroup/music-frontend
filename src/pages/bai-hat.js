import React, { Component } from 'react'
import * as redux from '../redux'

class BaiHat extends Component {
  constructor(props) {
    super(props);

    this.props.email = 'garen@gmail.com'

    this.state = {
      baiHat: null
    }

    this.afterGetBaiHat = this.afterGetBaiHat.bind(this)
  }

  componentWillMount() {
    redux.actions.getBaiHatById(this.props.match.params.idBaiHat, this.afterGetBaiHat)
  }

  render() {
    console.log(this.state.baiHat)
    return (
      <div>
        BAI HAT PAGE
      </div>
    )
  }

  afterGetBaiHat(baiHat) {
    this.setState({ baiHat: baiHat })
  }
}

export default BaiHat