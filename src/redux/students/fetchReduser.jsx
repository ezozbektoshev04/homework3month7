// import React, { useState } from "react";
import { FETCH_FAILURE, FETCH_REQUEST, FETCH_STUDENTS } from "./fetchUsers";
// const students = [];

const initialState = {
  loading: true,
  students: [],
  error: "",
  studentObj: {},
};

const fetchReduser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STUDENTS:
      return {
        ...state,
        loading: false,
        error: "",
        students: action.payload,
        studentObj: {},
      };
    case FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default fetchReduser;
