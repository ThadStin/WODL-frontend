import React, { Component } from 'react';
import WorkoutList from './components/WorkoutList.js';
import Header from './components/Header.js';
import Form from './components/Form.js';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentView: 'heroWODS', //vs heroWODS
      allWorkouts: [],
      heroWODS:[]
    }
    this.handleView = this.handleView.bind(this)
    this.fetchWorkouts = this.fetchWorkouts.bind(this)
    this.sortWorkouts = this.sortWorkouts.bind(this)
    this.setWorkouts = this.setWorkouts.bind(this)
    this.handleCreateWorkout = this.handleCreateWorkout.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.removeFromArray = this.removeFromArray.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.updateArray = this.updateArray.bind(this)
  }
  // ---------- METHODS ------------
  handleView(view) {
    this.setState({
      currentView: view
    })
  }

  fetchWorkouts() {
    fetch('http://localhost:3000/workouts/')
      .then(data => data.json())
      .then(jData => {
        this.sortWorkouts(jData)
    })
  }

  sortWorkouts(workouts) {
    let allWorkouts = []
    let heroWODS = []
    workouts.forEach( workout => {
      if (workout.hero_wod) {
        heroWODS.push(workout)
      } else {
        allWorkouts.push(workout)
      }
    })
    this.setWorkouts(heroWODS, allWorkouts)
  }

  setWorkouts(workouts, wods) {
    this.setState({
      allWorkouts: workouts,
      heroWODS: wods
    })
  }

  handleCheck(workout, arrayIndex, currentArray) {
    workout.heroWODS = !workout.heroWODS
    fetch('http://localhost:3000/workouts/' + workout.id, {
      body:JSON.stringify(workout),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then (updatedWorkout => updatedWorkout.json())
    .then(jData => {
      this.removeFromArray(currentArray, arrayIndex)
        if(currentArray === 'allWorkouts') {
          this.updateArray(jData, 'heroWODS')
        }  else {
            this.updateArray(jData, 'allWorkouts')
        }
    })
    .catch(err => console.log('this is error from handleCheck', err))
  }

  removeFromArray(array, arrayIndex) {
    this.setState(prevState => {
      prevState[array].splice(arrayIndex, 1)
      return {
        [array]: prevState[array]
      }
    })
  }

  updateArray(workout, array) {
    this.setState( prevState => {
      prevState[array].push(workout)
      return {
        [array]: prevState[array]
      }
    })
  }

  handleCreateWorkout(workout) {
    fetch('http://localhost:3000/workouts/', {
      body: JSON.stringify(workout),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdWorkout => {
      return createdWorkout.json()
    })
    .then(jData => {
      this.updateArray(jData, 'allWorkouts')
      this.handleView('allWorkouts')
    })
    .catch(err => console.log(err))
  }

  //delete
  handleDelete(workoutId, arrayIndex, currentArray) {
    console.log('this is delete', workoutId, arrayIndex, currentArray)
    fetch(`http://localhost:3000/workouts/${workoutId}`, {
      method: 'DELETE'
    })
    .then(data => {
      this.removeFromArray(currentArray, arrayIndex)
    })
    .catch(err => console.log(err))
  }


  componentDidMount() {
  	this.fetchWorkouts()
  }

  render() {
    // console.log('this is state', this.state);
    return (
      <div className="container">
        <h1>W.O.D.L.</h1>
        <p>log your wod</p>
        <Form
         handleCreateWorkout={this.handleCreateWorkout}
         
         />
         <Header
         currentView={this.state.currentView}
         handleView={this.handleView}
         workoutsCount={this.state.allWorkouts.length}
         heroWODSCount={this.state.heroWODS.length}
        />
       <WorkoutList
        currentView={this.state.currentView}
        handleView={this.handleView}
        allWorkouts={this.state.allWorkouts}
        heroWODS={this.state.heroWODS}
        handleCheck={this.handleCheck}
        handleDelete={this.handleDelete}
       />
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


// <Form
//  handleCreateTask={this.handleCreateTask}
//  />
