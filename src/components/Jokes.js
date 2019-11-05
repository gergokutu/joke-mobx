import React, { Component } from 'react'
import { incject, observer, inject } from 'mobx-react'

@inject('JokeStore')
@observer
class Jokes extends Component {
  state = {
    punchline: false
  }

  render() {
    // how to solve that display an element after delay
    // setTimeout works only rendered element
    setTimeout(() => {
      this.setState({punchline: true})
    }, 2000) 

    return (
      <div className='joke'>
        {!this.state.punchline && 
          <div>
            <p>{this.props.JokeStore.jokes.setup}</p>
          </div>}
          
        {this.state.punchline && 
          <div>
            <p>{this.props.JokeStore.jokes.setup}</p>
            <p>{this.props.JokeStore.jokes.punchline}</p>
          </div>}
      </div>
    )
  }
}

export default Jokes