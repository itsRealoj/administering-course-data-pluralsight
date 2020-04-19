import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import propTypes from 'prop-types';
import { bindActionCreators } from 'redux';

class CoursesPage extends React.Component {
  render() {
    return (
      <>
        <h2>Courses</h2>
        {this.props.courses.map((course) => {
          <div key={course.title}>{course.title}</div>;
        })}
      </>
    );
  }
}

//clarify dispatch is expected
CoursesPage.propTypes = {
  dispatch: propTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    course: state.course,
  };
}

const connectedStateAndProps = connect(mapStateToProps);
export default connectedStateAndProps(CoursesPage);
// export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
