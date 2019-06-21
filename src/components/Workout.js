import React, { Component } from 'react'

class Workout extends Component {
  render () {
    return (
      <React.Fragment>

      <tr>
        <td className="table table-sm table-dark">{this.props.workout.name}
          <br></br>
          <i
           className="delete far fa-trash-alt"
           onClick={() =>
              {this.props.handleDelete(this.props.workout.id, this.props.arrayIndex, this.props.currentArray)}}
          ></i>
        </td>
        <td className="table table-sm table-dark">{this.props.workout.rounds}</td>
        <td className="table table-sm table-dark">{this.props.workout.reps}</td>
        <td className="table table-sm table-dark">{this.props.workout.weight}</td>
        <td className="table table-sm table-dark">{this.props.workout.time}</td>
        <td className="table table-sm table-dark">{this.props.workout.date}</td>
        <td className="table table-sm table-dark">{this.props.workout.comments}</td>
      </tr>


      </React.Fragment>
    )
  }
}

// export the class
export default Workout
// <td className="table table-sm table-dark">{this.props.workout.rx}</td>
// <div className="task-actions">
//   { this.props.workout.allWorkouts
//     ? <i
//       className="incomplete far fa-check-square"
//       onClick={() => {this.props.handleCheck(this.props.workout, this.props.arrayIndex, this.props.currentArray)}}
//       ></i>
//     : <i
//       className="complete far fa-square"
//       onClick={() => {this.props.handleCheck(this.props.workout, this.props.arrayIndex, this.props.currentArray)}}
//       ></i>
//   }
//   <i
//    className="delete far fa-trash-alt"
//    onClick={() =>
//       {this.props.handleDelete(this.props.workout.id, this.props.arrayIndex, this.props.currentArray)}}
//   ></i>
// </div>
