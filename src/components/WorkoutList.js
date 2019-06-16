import React, { Component } from 'react'
import Workout from './Workout'

class WorkoutList extends Component {
  render () {
    return (
      <div className="workout-list">
        <table>
          <thead>
            <tr>
              <th> </th>
              <th> Workout: </th>
              <th> : </th>
              <th> style: </th>
            </tr>
          </thead>
          <tbody>
        { this.props.currentView === 'workouts'
          ? <React.Fragment>
            { this.props.allWorkouts.map((workout, index) => {
              return (
                  <Workout
                    key={index}
                    workout={workout}
                    handleCheck={this.props.handleCheck}
                    arrayIndex={index}
                    currentArray='allworkouts'
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
                  handleCheck={this.props.handleCheck}
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
      </div>
    )
  }
}

// export
export default WorkoutList

///////////////////////////////////////////////////////////////////////////
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
