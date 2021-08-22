import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./redux/studentSlice";

export default configureStore({
    reducer:{
        student: studentReducer
    }
}) 