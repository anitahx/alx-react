import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [checkbox, setCheckbox] = useState(false)

  const updateCheck = () => {
    setCheckbox(!checkbox)
  }

  const bgRow = { backgroundColor: "#f5f5f5ab" };
  const bgHeaderRow = { backgroundColor: "#deb5b545" };

  const selectedBg = isHeader ? bgHeaderRow : bgRow;
  return (
    <tr style={selectedBg}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(rowStyles.thCenter)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(rowStyles.th)}>{textFirstCell}</th>
            <th className={css(rowStyles.th)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className={`${css(rowStyles.td, checkbox ? rowStyles.rowChecked : '')} `}>
            <input type="checkbox" onClick={updateCheck}  />
            {textFirstCell}
            </td>
          <td className={`${css(rowStyles.td, checkbox ? rowStyles.rowChecked : '')} `}>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const rowStyles = StyleSheet.create({
  thCenter: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "center",
  },
  th: {
    borderBottom: "1px solid gray",
    margin: 0,
    padding: 0,
    textAlign: "left",
    ":first-child": {
      textAlign: "center",
    },
  },
  td: {
    paddingLeft: "3px",
  },
  rowChecked: {backgroundColor: '#e6e4e4'},
});

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
