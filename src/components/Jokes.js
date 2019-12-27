import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('JokeStore')
@observer
class Jokes extends Component {
  state = {
    showPunchline: false
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({showPunchline: true})
  //   }, 2000) 
  // }

  render() {
    // how to solve that display an element after few sec
    // a local state needed » not show / show the puncline
    // setTimeout works only on rendered element
    // it works in the componentDidMount as well
    setTimeout(() => {
      this.setState({showPunchline: true})
    }, 2000) 

    return (
      <div className='joke'>
        {/* if showPunchline false » show only the setup */}
        {!this.state.showPunchline && 
          <div>
            <p>{this.props.JokeStore.jokes.setup}</p>
          </div>}

        {/* if showPunchline true » show both the setup and punchline */} 
        {this.state.showPunchline && 
          <div>
            <p>{this.props.JokeStore.jokes.setup}</p>
            <p>{this.props.JokeStore.jokes.punchline}</p>
          </div>}
      </div>
    )
  }
}

export default Jokes