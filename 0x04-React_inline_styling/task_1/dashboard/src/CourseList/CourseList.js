import React from 'react'
import PropType from 'prop-types'
import CourseListRow from './CourseListRow'
import CourseShape from './CourseShape'
import { StyleSheet, css } from 'aphrodite'

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList' className={css(courseListStyles.th, courseListStyles.table, courseListStyles.td)}>
        <thead>
            <CourseListRow textFirstCell='Available courses' isHeader={true} />
            <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
        </thead>
        <tbody>
          { listCourses.length === 0 ? 
            <CourseListRow textFirstCell='No course available yet' isHeader={false} />
          : null}
          { listCourses.map((item) =>{
            return <CourseListRow key={item.id} textFirstCell={item.name} textSecondCell={item.credit} isHeader={false} />
          })}
        </tbody>
    </table>
  )
}

const courseListStyles = StyleSheet.create({
  th: {
    borderBottom: '1px solid gray',
    margin: 0,
    padding: 0,
    textAlign: 'left',
    ':first-child': {
      textAlign: 'center',
  },
},

table: {
    width: '90%',
    border: '1px solid gray',
    margin: 'auto',
    marginTop: '40px',
    padding: 0,
},

td: {
    paddingLeft: '3px',
}
})

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropType.arrayOf(CourseShape)
}

export default CourseList