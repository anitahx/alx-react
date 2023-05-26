import React from "react";
import PropType from "prop-types";
import CourseListRow from "./CourseListRow";
import { StyleSheet, css } from "aphrodite";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { connect } from "react-redux";
import { getListCourses } from "../selectors/courseSelector";

export class CourseList extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeRow = this.onChangeRow.bind(this);
  }

  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  render() {
    const { listCourses } = this.props;

    return (
      <table id="CourseList" className={css(courseListStyles.table)}>
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow
              textFirstCell="No course available yet"
              isHeader={false}
            />
          ) : null}
          {listCourses.map((item) => {
            return (
              <CourseListRow
                key={item.id}
                id={item.id}
                textFirstCell={item.name}
                textSecondCell={item.credit}
                isHeader={false}
                isChecked={item.isSelected}
                onChangeRow={this.onChangeRow}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

const courseListStyles = StyleSheet.create({
  table: {
    width: "90%",
    border: "1px solid gray",
    margin: "auto",
    marginTop: "40px",
    padding: 0,
  },
});

CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

CourseList.propTypes = {
  listCourses: PropType.oneOfType([PropType.array, PropType.object]),
  fetchCourses: PropType.func,
  selectCourse: PropType.func,
  unSelectCourse: PropType.func,
};

export const mapStateToProps = (state) => {
  const coursesList = getListCourses(state);
  return {
    listCourses: coursesList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
