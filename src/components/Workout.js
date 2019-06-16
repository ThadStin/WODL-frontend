import React, { Component } from 'react'

class Workout extends Component {
  render () {
    return (
      <div className="task">
        <div className="task-item">{this.props.workout.name}
        </div>
        <div className="task-actions">
          { this.props.workout.allWorkouts
            ? <i
              className="incomplete far fa-check-square"
              onClick={() => {this.props.handleCheck(this.props.workout, this.props.arrayIndex, this.props.currentArray)}}
              ></i>
            : <i
              className="complete far fa-square"
              onClick={() => {this.props.handleCheck(this.props.workout, this.props.arrayIndex, this.props.currentArray)}}
              ></i>
          }
          <i
           className="delete far fa-trash-alt"
           onClick={() =>
              {this.props.handleDelete(this.props.workout.id, this.props.arrayIndex, this.props.currentArray)}}
          ></i>
        </div>
      </div>
    )
  }
}
// create the class and have it render the following:



// export the class
export default Workout
