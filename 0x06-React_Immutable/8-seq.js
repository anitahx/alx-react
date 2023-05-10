import { Seq } from 'immutable';

const printBestStudents = (obj) => {
  const seq = Seq(obj);

  const students = seq.filter((student) => student.score > 70);
  const changeStudent = students.toJS();
  const nameFormat = (name) => name.charAt(0).toUpperCase() + name.slice(1);
  Object.keys(changeStudent).map((item) => {
    changeStudent[item].firstName = nameFormat(changeStudent[item].firstName);
    changeStudent[item].lastName = nameFormat(changeStudent[item].lastName);
    return changeStudent[item];
  });
  console.log(changeStudent);
};

export default printBestStudents;
