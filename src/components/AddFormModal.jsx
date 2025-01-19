import React from "react";
import { Link } from "react-router-dom";

export default function AddFormModal() {
  return (
    <div>
      <div
        className="modal fade"
        id="addFormModal"
        tabindex="-1"
        aria-labelledby="addFormModal"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header border-bottom-0">
              <h5 className="h5 modal-title" id="addFormModal">
                Create Form
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="container-fluid mb-3">
                  <label
                    htmlFor="formName"
                    className="text-secondary fw-bold mb-2"
                  >
                    Form Name:
                  </label>
                  <input
                    type="text"
                    name="formName"
                    id="formName"
                    className="form-control"
                    placeholder="Enter your form name"
                    required
                  />
                </div>
                <div className="container-fluid mb-3">
                  <label
                    htmlFor="project"
                    className="text-secondary fw-bold mb-2"
                  >
                    Project:
                  </label>
                  <select
                    name="project"
                    id="project"
                    className="form-select"
                    required
                  >
                    <option value="">Select Project</option>
                    <option>Test Formboard</option>
                  </select>
                </div>
                <div className="container-fluid mb-3">
                  <label
                    htmlFor="project"
                    className="text-secondary fw-bold mb-2"
                  >
                    Send email to:
                  </label>
                  <select
                    name="project"
                    id="project"
                    className="form-select"
                    required
                  >
                    <option value="">Select email</option>
                    <option>testuser@gmail.com</option>
                  </select>
                </div>
                <div className="container-fluid mb-3">
                  <p>
                    To send to a new email address please first add to linked
                    emails on the{" "}
                    <Link
                      href=""
                      className="text-primary fw-bold text-decoration-none"
                    >
                      {" "}
                      account
                    </Link>{" "}
                    page
                  </p>
                </div>
                <div className="container-fluid mb-3 text-end">
                  <button className="btn btn-primary">Create Form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
