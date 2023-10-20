import axios from "axios";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_STUDENTS } from "./fetchUsers";

export const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const fetchStudent = (students) => {
  return {
    type: FETCH_STUDENTS,
    payload: students,
  };
};
export const fetchFailure = (err) => {
  return {
    type: FETCH_FAILURE,
    payload: err,
  };
};

export const fetchStudenData = () => {
  return (dispatch) => {
    dispatch(fetchRequest());
    axios
      .get("https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products")
      .then((res) => {
        const studentList = res.data;
        dispatch(fetchStudent(studentList));
      })
      .catch((err) => {
        dispatch(fetchFailure(err.message));
      });
  };
};
