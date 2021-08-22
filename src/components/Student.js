import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getStudent ,clearStudent} from '../redux/studentSlice';

const Student = () => {
    const history = useHistory();
    const { id } = useParams();
    const dispatch = useDispatch();
    const {firstName , lastName , email} = useSelector(state => state.student.student);

    // Getting Student
    useEffect(()=>{
        dispatch(getStudent(id));
        
        return () => {
            dispatch(clearStudent());
        };
        // eslint-disable-next-line
    }, []);

    const goBack = () => {
        history.push("/");
    }

    return (
        <div className="student-item">
            <h2>{firstName} {lastName}</h2>
            <p>{email}</p>
            <p>{id}</p>
            <button className="btn" onClick={goBack}>Back</button>
        </div>
    )
}

export default Student;
