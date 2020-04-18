import React from 'react';

class CoursesPage extends React.Component {
  state = {
    courses: {
      tittle: '',
    },
  };

  handleChange = (event) => {
    const course = { ...this.state.course, tittle: event.target.value };
    this.setState({ course });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.course.tittle);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <input
          type='text'
          onChange={this.handleChange}
          value={this.state.courses.title}
        />
        <input type='submit' value='save' />
      </form>
    );
  }
}

export default CoursesPage;
