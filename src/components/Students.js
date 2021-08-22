import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import StudentItem from "./StudentItem";

const Students = () => {
  const students = useSelector((state) => state.student.students);

  return (
    <>
    <h1>CRUD Application</h1>
    <div className="student-container">
      {students.map((student) => (
        <StudentItem student={student} key={student.id} />
      ))}

      <Link to="/addStudent" ><button className="add-std">Add Student</button></Link>
    </div>
    </>
  );
};

export default Students;
