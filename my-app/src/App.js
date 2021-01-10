import React, {Component} from 'react'
import'./scss/index.scss';

class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }

    this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
  }

  render() {
    return (
      <>
        <h1>Reactjs</h1>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>increment</button>

        {/* <button onClick={() => this.increment(1)}>increment1</button>
        <button onClick={() => this.increment(2)}>increment2</button> */}
      </>
    )
  }
}

export default App;
