import React, { Component } from 'react'
import * as redux from '../redux'

class BaiHat extends Component {
  render() {
    redux.actions.getBaiHatById(this.props.match.params.idBaiHat, function (res) {
      console.log(res)
    })
    return (
      <div>
        {this.props.match.params.idBaiHat}
      </div>
    )
  }
}

export default BaiHat