import {
  faChevronDown,
  faChevronUp,
  faEllipsisV,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import AddFormModal from "./AddFormModal";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [expandMenu, setExpandMenu] = useState(true);
  return (
    <>
      <div
        className="container-fluid bg-white border-end shadow"
        style={{ height: "95vh" }}
      >
        <div className="p-1 pt-4">
          <button className="btn btn-outline-primary w-100 py-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New
          </button>

          <div className="row align-items-center mt-3">
            <div className="col-3">
              <button
                className="btn"
                onClick={() => setExpandMenu((prev) => !prev)}
              >
                <FontAwesomeIcon
                  icon={expandMenu ? faChevronUp : faChevronDown}
                />
              </button>
            </div>
            <div className="col-6 text-center">
              <h6>TEST FORMBOARD</h6>
            </div>
            <div className="col-3 text-end">
              <button className="btn">
                <FontAwesomeIcon icon={faEllipsisV} />
              </button>
            </div>
          </div>

          {expandMenu && (
            <div>
              <div className="w-100 mt-3 d-flex align-items-center justify-content-between">
                <Link to="./form/dd" className="btn w-100 text-start">
                  <h6>Form name</h6>
                </Link>
                <button className="btn">
                  <FontAwesomeIcon icon={faEllipsisV} />
                </button>
              </div>
              <button
                data-bs-toggle="modal"
                data-bs-target="#addFormModal"
                className="btn btn-outline-primary w-100 py-4 mt-3 d-flex align-items-center justify-content-center"
                style={{
                  border: "2px dashed var(--bs-primary) !important",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Click <FontAwesomeIcon icon={faPlusCircle} className="px-2" />
                Create Form
              </button>
            </div>
          )}
        </div>
      </div>

      <AddFormModal />
    </>
  );
}
