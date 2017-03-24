import * as taskActions from '../components/task/taskActions';
import * as segmentActions from '../components/segment/segmentActions';

let actions = {};
Object.assign(actions, taskActions, segmentActions);

export default actions;
