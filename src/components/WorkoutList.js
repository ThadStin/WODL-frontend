import React, { Component } from 'react'
import Workout from './Workout'
// class="th-sm" -- possible th class scope="col"   thead>id="datatable" className="table table-dark"
class WorkoutList extends Component {
  render () {
    return (

        <table id="datatable" className="table table-sm table-dark">
          <thead>
            <tr>
              <th> Workout: </th>
              <th> Rounds: </th>
              <th> Reps: </th>
              <th> Weight: </th>
              <th> Time: </th>
              <th> Date: </th>
              <th> Comments: </th>
            </tr>
          </thead>
          <tbody>
        { this.props.currentView === 'allWorkouts'
          ? <React.Fragment>
            { this.props.allWorkouts.map((workout, index) => {
              return (
                  <Workout
                    key={index}
                    workout={workout}
                    // handleCheck={this.props.handleCheck}
                    arrayIndex={index}
                    currentArray='allWorkouts'
                    handleDelete={this.props.handleDelete}
                  />
                )
              })}
            </React.Fragment>
          : <React.Fragment>
            {this.props.heroWODS.map((workout, index) =>{
              return (
                <Workout
                  key={index}
                  workout={workout}
                  // handleCheck={this.props.handleCheck}
                  arrayIndex={index}
                  currentArray='heroWODS'
                  handleDelete={this.props.handleDelete}
                />
              )
            })}
            </React.Fragment>
          }
          </tbody>
        </table>

    )
  }
}

// export
export default WorkoutList

///////////////////////////////////////////////////////////////////////////
// id="datatable" className="table table-sm table-dark" cellSpacing="0" width="100%"
// <th> RX: </th>
// <div className="workout-list">
// </div>
// import React, { Component } from 'react'
// import Workout from './Workout.js'
//
// class WorkoutList extends Component {
//   render () {
//     return (
//       <div className="workout-list">
//         { this.props.currentView === 'workouts'
//          ? <div>
//            { this.props.allWorkouts.map((workout, index) => {
//              return (
//                <Workout
//                 key={index}
//                 workout={workout}
//                 handleCheck={this.props.handleCheck}
//                 arrayIndex={index}
//                 currentArray='allWorkouts'
//                 handleDelete={this.props.handleDelete}
//               />
//             )
//           })}
//           </div>
//         : <div>
//             { this.props.heroWODS.map((workout, index) => {
//               return (
//                 <Workout
//                   key={index}
//                   workout={workout}
//                   handleCheck={this.props.handleCheck}
//                   arrayIndex={index}
//                   currentArray='HeroWODS'
//                   handleDelete={this.props.handleDelete}
//                 />
//               )
//             })}
//             </div>
//           }
//       </div>
//     )
//   }
// }
// create the class and have it render the following:


// export the class
//export default WorkoutList
