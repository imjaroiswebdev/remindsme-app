import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants'

// Actions creator functions
export const addReminder = (text, dueDate) => {
	const action = {
		type: ADD_REMINDER,
		text,
		dueDate
	}
	console.log('action in addReminder', action)
	return action;
}

export const deleteReminder = (id) => {
	const action = {
		type: DELETE_REMINDER,
		id
	}
	console.log('deleting in actions', action)
	return action
}

// Just update the actual state to an empty array of reminders
// because of that doesn't need of arguments or returning any data
export const clearReminders = () => {
	return {
		type: CLEAR_REMINDERS
	}
}