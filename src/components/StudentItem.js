import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../redux/studentSlice";

const StudentItem = ({ student }) => {
  const { firstName, lastName, email, id } = student;
  const dispatch = useDispatch();

  return (
    <div className="student-item">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{email}</p>
      <Link to={`/student/${id}`}>
        <button className="btn">View</button>
      </Link>
      <div className="student-cta">
       <Link to={`/student/${id}/edit`}><button className="btn">Edit</button></Link>
        <button className="btn" onClick={()=>dispatch(deleteStudent(id))}>Delete</button>
      </div>
    </div>
  );
};

export default StudentItem;
