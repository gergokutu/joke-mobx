import React, { Component } from 'react'
import { incject, observer, inject } from 'mobx-react'

@inject('JokeStore')
@observer
class Jokes extends Component {
  render() {
    return (
      <div className='joke'>
        <p>{this.props.JokeStore.jokes.setup}</p>
        <p>{this.props.JokeStore.jokes.punchline}</p>
      </div>
    )
  }
}

export default Jokes