import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
  super(props)
  this.state = {
    name: '',
    rounds: '',
    reps: '',
    weight: '',
    time: '',
    date: '',
    comments: '',
    // rx: false,
    hero_wod: false,
    showForm: false
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.clearForm = this.clearForm.bind(this)
  this.toggleForm = this.toggleForm.bind(this)
}

// handle change
handleChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}
// name: event.target.value,
// rounds: event.target.value,
// reps: event.target.value,
// weight: event.target.value,
// time: event.target.value,
// date: event.target.value,
// comments: event.target.value,
// rx: event.target.value,
// hero_wod: event.target.value

toggleForm() {
  this.setState({
    showForm: !this.state.showForm
  })
}
// handle submit
handleSubmit = (event) => {
  event.preventDefault()
  this.props.handleCreateWorkout(this.state)
  this.toggleForm()
  this.clearForm()
}

clearForm = () => {
  this.setState({
    name: '',
    rounds: '',
    reps: '',
    weight: '',
    time: '',
    date: '',
    comments: '',
    // rx: false,
    hero_wod: false
  })
}

  render () {
    return (
      <div className="form" onSubmit={this.handleSubmit}>
        <button className="add" onClick={this.toggleForm}>Add Workout</button>
        {this.state.showForm === true
        ?
        <form>
          <input
            type='text'
            placeholder="name of workout"
            onChange={this.handleChange}
            value={this.state.name}
            id='name'
          />
          <input
            type='text'
            placeholder="rounds"
            onChange={this.handleChange}
            value={this.state.rounds}
            id='rounds'
          />
          <input
            type='text'
            placeholder="reps"
            onChange={this.handleChange}
            value={this.state.reps}
            id='reps'
          />
          <input
            type='text'
            placeholder="weight"
            onChange={this.handleChange}
            value={this.state.weight}
            id='weight'
          />
          <input
            type='text'
            placeholder="time"
            onChange={this.handleChange}
            value={this.state.time}
            id='time'
          />
          <input
            type='text'
            placeholder="date"
            onChange={this.handleChange}
            value={this.state.date}
            id='date'
          />
          <textarea
            type='text'
            placeholder="comments"
            onChange={this.handleChange}
            value={this.state.comments}
            id='comments'
          />
<br></br>
          <input className="check"
            type='checkbox'
            placeholder="hero_wod"
            onChange={this.handleChange}
            value={this.state.hero_wod}
            id='hero_wod'
          /><span>HERO WOD</span>
          <button type="submit" className="submit-button">SUBMIT WORKOUT</button>
        </form>
        : <span></span>
      }
      </div>
    )
  }
}
// create the class and have it render the following:


// export the class
export default Form
// check={this.state.hero_wod}
// <input
//   type='checkbox'
//   placeholder="rx"
//   onChange={this.handleChange}
//   value={this.state.rx}
//   id='rx'
// /> <span>RX</span>
