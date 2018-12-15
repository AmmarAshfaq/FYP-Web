import React, { Component } from 'react'

export default class UploadFile extends Component {
  constructor () {
    super()
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({
      file: event.target.files[0]
    })
  }
  render () {
    console.log(this.state.file)
    return (
      <div>
        <input type='file' onChange={this.handleChange} />
        <img src={this.state.file} />
      </div>
    )
  }
}
