import * as taskActions from '../task/taskActions';
import * as segmentActions from '../segment/segmentActions';
import * as apiTaskActions from '../middleware/apiTasksActions';

let actions = {};
Object.assign(actions, taskActions, segmentActions, apiTaskActions);

export default actions;
