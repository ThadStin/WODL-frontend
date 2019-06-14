import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'workouts', //vs heroWOD
      workouts: [],
      heroWODS:[]
    }
  }
  render() {
    return (
      <div>
        <h1>WODL</h1>
      </div>
    );
  }
}
export default App;
// how it runs:
// 0. life cycle methods - mounting, updating, unmounting
// 1. constructor
// 2. render
// 3. componentDidMount - it triggers a re-render this is lifecycle method
