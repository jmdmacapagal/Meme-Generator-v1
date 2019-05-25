import React, { Component } from 'react'
import Header from './components/Header'
import MemeGenerator from './components/MemeGenerator'


class App extends Component {
    constructor() {
      super()
      this.state = {}
    }

    render() {
      return (
        <div className="app">
          <Header />
          <MemeGenerator />
        </div>
      )
    }
}

export default App