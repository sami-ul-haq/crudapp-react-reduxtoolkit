import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StudentItem from "./StudentItem";

const Students = () => {
  const students = useSelector((state) => state.student.students);
  console.log(students)
  return (
    <div className="student-container">
      {students.map((student) => (
        <StudentItem student={student} key={student.id} />
      ))}

      <Link to="/addStudent" ><button>Add Student</button></Link>
    </div>
  );
};

export default Students;
