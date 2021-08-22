import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    {
      id: 1,
      firstName: "Himadri",
      lastName: "Bhattathiri",
      email: "Chandramani_Talwar73@hotmail.com",
      phone: "+91620-320-4125",
      address: "474 Banerjee Fords",
    },
    {
      id: 2,
      firstName: "Subhasini",
      lastName: "Bhattacharya",
      email: "Chetan17@yahoo.co.in",
      phone: "+91953-928-4930",
      address: "52520 Bhisham Brooks",
    },
    {
      id: 3,
      firstName: "Daevika",
      lastName: "Ganaka",
      email: "Bharat89@gmail.com",
      phone: "+91-917-1416065",
      address: "78079 Patel Park",
    },
    {
      id: 4,
      firstName: "Tanya",
      lastName: "Trivedi",
      email: "Birjesh_Sinha3@hotmail.com",
      phone: "+91-644-6939697",
      address: "57761 Shreyashi Junctions",
    }
  ],
  student: {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  },
};

export const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    getStudent: (state, action) => {
      state.student = state.students.find((std) => std.id == action.payload)
    },
    clearStudent: (state) => {
      state.student = {};
    },
    addStudent: (state, action) => {
        state.students = [...state.students , action.payload]
    },
    updateStudent: (state, action) => {
      state.students = state.students.map(std => std.id == action.payload.id ? action.payload : std);
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(
        (std) => std.id !== action.payload
      );
    },
  },
});

export const {
  getStudent,
  clearStudent,
  addStudent,
  updateStudent,
  deleteStudent,
} = studentSlice.actions;
export default studentSlice.reducer;
