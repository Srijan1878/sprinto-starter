import { getNextDay } from '../utils/getNextDay.js';

const taskDefaults = {
    description: '',
    status: 'pending',
    priority: 'low',
    taskDate: getNextDay(),
}

export default taskDefaults;