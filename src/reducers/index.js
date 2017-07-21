import { ADD_REMINDER } from '../constants';

// Helper reminder function
const reminder = (action) => {
	return {
		text: action.text,
		id: Math.random()
	}
}

// Reminder reducer
const reminders = (state = [], action) => {
	let reminders = null
	switch(action.type) {
		case ADD_REMINDER:
			reminders = [...state, reminder(action)]
			console.log('reminders as state', reminders)
			return reminders;
		default:
			return state
	}
}

export default reminders;