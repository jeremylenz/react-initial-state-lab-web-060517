// Bomb Component Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom'

export default class ImageSlider extends React.Component {
  render() {
    return (
      <h3>I am on slide {this.state.currentSlideIndex}</h3>
    )
  }

  constructor(props) {
    super(props)
    this.state = { currentSlideIndex: 0 }
  }

}
