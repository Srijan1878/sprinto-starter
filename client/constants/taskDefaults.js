import { getNextDay } from '../utils/getNextDay.js';

const taskDefaults = {
    name: '',
    description: '',
    status: 'pending',
    priority: 'low',
    taskDate: getNextDay(),
}

export default taskDefaults;