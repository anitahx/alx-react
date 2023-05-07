import React from 'react'
import PropType from 'prop-types'
import CourseListRow from './CourseListRow'
import './CourseList.css'
import CourseShape from './CourseShape'

const CourseList = ({ listCourses }) => {
  return (
    <table id='CourseList'>
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

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropType.arrayOf(CourseShape)
}

export default CourseList