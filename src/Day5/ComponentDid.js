import React, { Component } from 'react'

export default class ComponentDid extends Component {
    state={
        col:"red"
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({col:"blue"})
        }, 3000);
    }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        
    }
  render() {
    return (
      <div><h1>{this.state.col}</h1>
      <h2 id="i"></h2></div>
    )
  }
}
