import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Initialize state
  state = { values: [] }

  componentDidMount() {
    this.getValues();
  }

  getValues = () => {
    fetch('/api/testValues')
      .then(res => res.json())
      .then(values => this.setState({ values }));
  }

  render() {
    const { values } = this.state;

    return (
      <div className="App">
        {values.length ? (
          <div>
            <h1>Test Values</h1>
            <ul className="values">
              {values.map((value, index) =>
                <li key={index}>
                  {value}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getValues}>
              Get More
            </button>
          </div>
        ) : (
          // Render a helpful message otherwise
          <div>
            <h1>No values :(</h1>
            <button
              className="more"
              onClick={this.getValues}>
              Try Again?
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;