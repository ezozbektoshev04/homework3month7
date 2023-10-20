import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddStudent = ({
  show,
  handleClose,
  student,
  handleChange,
  handleSubmit,
  editSubmit,
  edit,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="pb-3">
              <label htmlFor="firstname">Firtname</label>
              <input
                type="text"
                name="firstname"
                id="name"
                value={student.firstname}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="pb-3">
              <label htmlFor="lastname">Firtname</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="form-control"
                value={student.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="pb-3">
              <label htmlFor="group">Select Group</label>
              <select
                name="group"
                id="group"
                value={student.group}
                className="form-select"
                onChange={handleChange}
              >
                <option value="React N14">React N14</option>
                <option value="React N15">React N15</option>
                <option value="React N16">React N16</option>
                <option value="React N17">React N17</option>
              </select>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                // value="true"
                checked={student.doesWork}
                id="doesWork"
                name="doesWork"
                // value={}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="doesWork">
                Does Work?
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={edit === true ? handleSubmit : editSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStudent;
