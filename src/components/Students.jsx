import React, { useEffect, useState } from "react";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudenData } from "../redux/students/fetchAction";
import axios from "axios";

const Students = () => {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [student, setStudent] = useState({
    firstname: "",
    lastname: "",
    group: "React N14",
    doesWork: false,
  });
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]:
        e.target.name === "doesWork" ? e.target.checked : e.target.value,
    });
  };
  //   const [filter, setFilter] = useState("All");

  const [input, setInput] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showBtn = () => {
    handleShow();
    setEdit(true);
    setStudent({
      firstname: "",
      lastname: "",
      group: "React N14",
      doesWork: false,
    });
  };

  // ADdd
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudenData());
  }, []);

  const handleSubmit = (e) => {
    handleClose();
    e.preventDefault();
    axios
      .post(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products",
        student
      )
      .then(() => dispatch(fetchStudenData()))
      .catch((err) => {
        console.log(err);
      });
  };

  // Edit
  const editData = (id) => {
    handleShow();
    setEdit(false);
    students.filter((el) => {
      if (el.id === id) {
        setStudent({
          id: el.id,
          firstname: el.firstname,
          lastname: el.lastname,
          group: el.group,
          doesWork: el.doesWork,
        });
      }
    });
  };

  /// Search
  const searchChange = (e) => {
    e.preventDefault();
    const textInput = e.target.value.toLowerCase();
    setInput(textInput);
  };

  const editSubmit = (e) => {
    handleClose();
    e.preventDefault();
    axios
      .put(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" +
          student.id,
        student
      )
      .then(() => dispatch(fetchStudenData()))
      .catch((err) => {
        console.log(err);
      });
  };

  //filter
  //   const [filter, setFilter] = useState("All");
  const filterChange = (e) => {
    e.preventDefault();
    const filter = e.target.value;
    axios
      .get(
        `https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products?filter=${filter}`,
        student
      )
      .then(() => dispatch(fetchStudenData()))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <header className="d-flex gap-4 w-100 pt-3 pb-3 ">
        <form
          className="d-flex w-75 gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="w-100">
            <input
              type="text"
              name="search"
              className="form-control w-100 "
              id="search"
              placeholder="Search..."
              onChange={searchChange}
            />
          </div>
          <div>
            <select
              name="filter"
              id="filter"
              className="form-select"
              style={{ width: "200px" }}
              onChange={(e) => filterChange(e)}
              //   value={filter}
            >
              <option value="All">All</option>
              <option value="React N14">React N14</option>
              <option value="React N15">React N15</option>
              <option value="React N16">React N16</option>
              <option value="React N17">React N17</option>
            </select>
          </div>
        </form>
        <button className="btn btn-success" onClick={showBtn}>
          Add Student
        </button>
      </header>
      <StudentList editData={editData} input={input} />
      <AddStudent
        show={show}
        editSubmit={editSubmit}
        handleClose={handleClose}
        handleChange={handleChange}
        student={student}
        edit={edit}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Students;
