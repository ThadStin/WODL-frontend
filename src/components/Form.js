// import React, { Component } from 'react'
//
// class Form extends Component {
//   constructor(props) {
//   super(props)
//   this.state = {
//     task_item: '',
//     completed: false
//   }
//   this.handleChange = this.handleChange.bind(this)
//   this.handleSubmit = this.handleSubmit.bind(this)
//
// }
//
// // handle change
// handleChange = (event) => {
//   this.setState({task_item: event.target.value})
// }
//
// // handle submit
// handleSubmit = (event) => {
//   event.preventDefault()
//   this.props.handleCreateTask(this.state)
//   this.clearForm()
// }
//
// clearForm = () => {
//   this.setState({ task_item: '' })
// }
//
//   render () {
//     return (
//       <div className="form" onSubmit={this.handleSubmit}>
//         <form>
//           <input
//            type='text'
//            placeholder="CREATE A NEW TO DO"
//            onChange={this.handleChange}
//            value={this.state.task_item}/>
//           <button type="submit" className="submit-button"><i className="fas fa-plus"></i></button>
//         </form>
//        </div>
//     )
//   }
// }
// // create the class and have it render the following:
//
//
// // export the class
// export default Form
