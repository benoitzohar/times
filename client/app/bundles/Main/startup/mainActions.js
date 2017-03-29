import * as taskActions from '../components/task/taskActions';
import * as segmentActions from '../components/segment/segmentActions';
import * as apiTaskActions from '../middleware/apiTasksActions';

let actions = {};
Object.assign(actions, taskActions, segmentActions, apiTaskActions);

export default actions;
