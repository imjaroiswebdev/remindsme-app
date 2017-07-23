import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addReminder, deleteReminder } from '../actions'
import moment from 'moment'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			dueDate: ''
		}
	}

	addReminder() {
		console.log('this.state.dueDate', this.state.dueDate)
		this.props.addReminder(this.state.text, this.state.dueDate)
	}

	deleteReminder(id) {
		this.props.deleteReminder(id)
	}

	renderReminders() {
		const { reminders } = this.props
		return (
			<ul className="list-group col-sm-4">
				{
					reminders.map(reminder => {
						return (
							<li key={reminder.id} className="list-group-item" >
								<div className="list-item">
									<div>{reminder.text}</div>
									<div><em>
										{/* Moment method to get relative date in days from today */}
										{moment(new Date(reminder.dueDate)).fromNow()}
									</em></div>
								</div>
								<div
									className="list-item delete-button"
									onClick={() => this.deleteReminder(reminder.id)}
								>
									&#x2715;
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}

	render() {
		return(
			<div className="App">
				<div className="title">Remindsme App</div>
				<div className="form-inline reminder-form">
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="I have to..."
							onChange={event => this.setState({text: event.target.value})}
						/>
						<input
							className="form-control"
							type="datetime-local"
							onChange={event => this.setState({dueDate: event.target.value})}
						 />
						<button
							type="button"
							className="btn btn-success"
							onClick={() => this.addReminder()}
						>
							Remindsme
						</button>
					</div>
				</div>
				{ this.renderReminders() }
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		reminders: state
	}
}


export default connect(mapStateToProps, { addReminder, deleteReminder })(App);