import React, { Component } from 'react'
import Workout from './Workout.js'


class WorkoutList extends Component {
  // constructor(props) {
  //   super(props)
  //   this.setState = {
  //     workouts: workouts,
  //       heroWODS: heroWODS,
  //       allWOrkouts: allWorkouts
  //   }
  //   this.sortBy = this.sortBy.bind(this)
  // }
  // sortBy(key) {
  //   this.setState({
  //     workouts: workouts.sort( (a, b) => a[key] > b[key] )
  //
  //   })
  // }


  // <button
  //   onClick={() => this.state.sortBy('date')}
  // ></button>
  render () {
    // console.log(workouts);
    return (

        <table id="datatable" className="table table-sm table-dark">
          <thead>
            <tr>
              <th> Workout: </th>
              <th> Rounds: </th>
              <th> Reps: </th>
              <th> Weight: </th>
              <th> Time: </th>
              <th>

                  Date:

              </th>
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
                    handleCheck={this.props.handleCheck}
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

    )
  }
}

// export
export default WorkoutList
