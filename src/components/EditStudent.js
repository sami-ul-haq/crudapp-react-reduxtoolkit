import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { clearStudent, getStudent, updateStudent } from "../redux/studentSlice";

const EditStudent = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.student.student);
  console.log(student);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  });

  const inputHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Getting Student
  useEffect(() => {
    if (student) {
      setData({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        address: student.address,
        phone: student.phone,
        id: student.id,
      });
    }
    dispatch(getStudent(id));
    return () => {
      dispatch(clearStudent());
    };
    // eslint-disable-next-line
  }, [student]);

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(updateStudent(data));
    history.push("/");
  };

  const goBack = () => {
    history.push("/");
  };

  return (
    <form onSubmit={formHandler}>
      <h1>Edit Student</h1>
      <label htmlFor="">First Name: </label>
      <input
        type="text"
        name="firstName"
        className="input-field"
        value={data.firstName}
        onChange={inputHandler}
        placeholder="enter first name"
      />
      <label htmlFor="">Last Name: </label>
      <input
        type="text"
        name="lastName"
        className="input-field"
        value={data.lastName}
        onChange={inputHandler}
        placeholder="enter last anem"
      />
      <label htmlFor="">Phone: </label>
      <input
        type="phone"
        name="phone"
        className="input-field"
        value={data.phone}
        onChange={inputHandler}
        placeholder="enter phone"
      />
      <label htmlFor="">Email: </label>

      <input
        type="email"
        name="email"
        className="input-field"
        value={data.email}
        onChange={inputHandler}
        placeholder="enter email"
      />
      <label htmlFor="">Address: </label>
      <input
        type="text"
        name="address"
        className="input-field"
        value={data.address}
        onChange={inputHandler}
        placeholder="enter address"
      />

      <button className="form-btn" type="submit">Update Student</button>
      <br />
      <br />
      <button className="form-btn" onClick={goBack}>Go Back</button>
    </form>
  );
};

export default EditStudent;
