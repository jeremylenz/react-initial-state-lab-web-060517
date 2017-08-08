// Bomb Component Code Goes Here
import React from 'react'
import ReactDOM from 'react-dom'

export default class Bomb extends React.Component {

  constructor(props) {
    super(props)
    this.state = { secondsLeft: props.initialCount }

  }

  render() {
    let secs = this.state.secondsLeft
    return (
      <h3>{secs > 0 ? secs + ' seconds left before I go boom!' : 'Boom!'}</h3>
    )
  }

}
