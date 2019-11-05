import React, { Component } from 'react'
import { incject, observer, inject } from 'mobx-react'

@inject('JokeStore')
@observer
class Jokes extends Component {
  render() {
    return (
      <div>Number of jokes: 
        <strong> {this.props.JokeStore.countJokes}</strong>
      </div>
    )
  }
}

export default Jokes