import React, { Component } from 'react'

class BaiHat extends Component {
  render() {
    return (
      <div>
        {this.props.match.params.idBaiHat}
      </div>
    )
  }
}

export default BaiHat