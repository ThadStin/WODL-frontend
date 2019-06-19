import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <div className="title">
          <h1>
            { this.props.currentView === 'allWorkouts'
            ? 'HERO WODS'
            : 'Daily Workouts' }
          </h1>

        </div>
        <ul>
          <li
          onClick={() => {this.props.handleView('allWorkouts')}}>Click to see daily workouts
          </li>
          <li onClick={() => {this.props.handleView('heroWODS')}}>Click to see Hero WODs</li>
        </ul>
      </div>
    )
  }
}
// create the class and have it render the following:




// export the class
export default Header
// {this.props.workoutsCount}
// {this.props.heroWODSCount}
