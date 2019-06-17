import React, { Component } from 'react'

class Workout extends Component {
  render () {
    return (
      <React.Fragment>

      <tr>
        <td>{this.props.workout.name}</td>
        <td>{this.props.workout.rounds}</td>
        <td>{this.props.workout.reps}</td>
        <td>{this.props.workout.weight}</td>
        <td>{this.props.workout.time}</td>
        <td>{this.props.workout.date}</td>

        <td>{this.props.workout.comments}</td>
      </tr>

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
      </React.Fragment>
    )
  }
}
// create the class and have it render the following:



// export the class
export default Workout

// <td>{this.props.workout.rx}</td>
