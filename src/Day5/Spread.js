import React, { Component } from 'react'

export default class Spread extends Component {
  render() {
    const{title1, ...restValue}=this.props;
    return (

      <div>
        <h1>ENTER PASSWORD{title1}</h1>
        <input {...restValue}></input>
      </div>
    )
  }
}
