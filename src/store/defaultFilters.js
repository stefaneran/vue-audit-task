import { type, priority } from '../types';

export default {
	title: '',
	type: type.all,
	priority: priority.all,
	reporter: '',
	assignees: [],
	section: '',
	date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)
}