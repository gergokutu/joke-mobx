import React from 'react';
import './App.css';

import Jokes from './components/Jokes'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Jokes />
      </div>
    );
  }
}

export default App;
