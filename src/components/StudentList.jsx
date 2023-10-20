import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudenData } from "../redux/students/fetchAction";
import axios from "axios";

const StudentList = ({ editData, input }) => {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStudenData());
  }, []);

  const deleteData = (id) => {
    axios
      .delete(
        "https://64dcf61be64a8525a0f76c4d.mockapi.io/api/v1/products/" + id
      )
      .then(() => dispatch(fetchStudenData()))
      .catch((err) => {
        console.log(err);
      });
  };
  const filteredData = students.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return (
        el.firstname.toLowerCase().includes(input) ||
        el.lastname.toLowerCase().includes(input)
      );
    }
  });
  return (
    <div>
      <table className="table table-bordered border-primary w-100">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstnmae</th>
            <th scope="col">Lastname</th>
            <th scope="col">Group</th>
            <th scope="col">Does Work?</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0
            ? filteredData.map((el, index) => {
                return (
                  <tr key={el.id}>
                    <th scope="row">{index + 1}</th>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                    <td>{el.group}</td>
                    <td>{el.doesWork === true ? "Ha" : "Yo'q"}</td>
                    <td className="d-flex gap-4">
                      <button
                        className="btn btn-info"
                        onClick={() => editData(el.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteData(el.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
