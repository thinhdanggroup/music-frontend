import React, { Component } from 'react'
import * as redux from '../redux'

class BaiHat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baiHat: null
    };

    this.afterGetBaiHat = this.afterGetBaiHat.bind(this)
  }

  componentWillMount() {
    const { idBaiHat } = this.props.match.params

    redux.actions.getBaiHatById(idBaiHat, this.afterGetBaiHat)
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