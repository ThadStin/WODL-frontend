import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <div className="title">
          <h1>
            { this.props.currentView === 'allWorkouts'
            ? 'All Workouts'
            : 'HERO WODS' }
          </h1>
          <h2>
            yes, another one...
          </h2>
        </div>
        <ul>
          <li
          onClick={() => {this.props.handleView('allWorkouts')}}>{this.props.workoutsCount}  workout</li>
          <li onClick={() => {this.props.handleView('heroWODS')}}>{this.props.heroWODSCount}  Hero WOD</li>
        </ul>
      </div>
    )
  }
}
// create the class and have it render the following:




// export the class
export default Header
