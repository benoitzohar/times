import { connect } from 'react-redux';
import SegmentPanel from './SegmentPanel';
import * as actions from './segmentActions';

const mapStateToProps = state => {
    return { params: state.params, segments: state.segments };
};

export default connect(mapStateToProps, actions)(SegmentPanel);
