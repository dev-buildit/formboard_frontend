import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div
      className="container-fluid p-0 d-flex align-items-center justify-content-center flex-column"
      style={{ height: "100vh" }}
    >
      <h1>
        <FontAwesomeIcon icon={faHome} className="me-3" /> Home Page
      </h1>
      <p>The page is still under development.</p>
    </div>
  );
}
