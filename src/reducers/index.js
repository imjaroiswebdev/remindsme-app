import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies'

// Helper reminder function constructor
const reminder = (action) => {
	let { text, dueDate } = action
	return {
		id: Math.random(),
		text,
		dueDate
	}
}

// Delete reminders by its id
const removeById = (state = [], id) => {
	const reminders = state.filter(reminder => reminder.id !== id)
	console.log('new reduced reminders', reminders)
	return reminders
}

// Reminder reducer
const reminders = (state = [], action) => {
	let reminders = null
	// Get de inicial rendering state from stored cookies
	state = read_cookie('reminders')

	switch(action.type) {
		case ADD_REMINDER:
			reminders = [...state, reminder(action)]
			console.log('reminders as state', reminders)
			// Store (update) reminders state in cookies
			bake_cookie('reminders', reminders)
			return reminders;
		case DELETE_REMINDER:
			reminders = removeById(state, action.id)
			// Delete (update) reminders state in cookies
			bake_cookie('reminders', reminders)
			return reminders
		case CLEAR_REMINDERS:
			reminders = []
			bake_cookie('reminders', reminders)
			return reminders
		default:
			return state
	}
}

export default reminders;