import { faCopy, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { CopyBlock, a11yDark, dracula } from "react-code-blocks";

export default function FormInfo() {
  return (
    <>
      <div className="container-fluid bg-white p-3 mt-3">
        <h5 className="h5">Form name</h5>

        <div class="container-fluid p-0 mt-3">
          <nav>
            <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-integration-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-integration"
                type="button"
                role="tab"
                aria-controls="nav-integration"
                aria-selected="true"
              >
                Integration
              </button>
              <button
                class="nav-link"
                id="nav-submission-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-submission"
                type="button"
                role="tab"
                aria-controls="nav-submission"
                aria-selected="false"
              >
                Submission
              </button>
              <button
                class="nav-link"
                id="nav-settings-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-settings"
                type="button"
                role="tab"
                aria-controls="nav-settings"
                aria-selected="false"
              >
                Settings
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade active show"
              id="nav-integration"
              role="tabpanel"
              aria-labelledby="nav-integration-tab"
            >
              <h6 className="h6">FORM ENDPOINT</h6>

              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-0"
                    placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-lg btn-outline-primary rounded-0">
                    {" "}
                    <FontAwesomeIcon icon={faCopy} className="me-2" /> Copy
                  </button>
                </div>
              </div>
              <p className="mt-2 mb-4">
                Place this URL in the form's action attribute, set the method to
                POST, and add a name attribute to each input.
              </p>
              <h6 className="h6">CODE EXAMPLE</h6>
              <div className="container">
                <CopyBlock
                  theme={dracula}
                  language="html"
                  text={`<!-- modify this form HTML and place wherever you want your form -->
<form
  action="https://formspree.io/f/xovqeqbq"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email">
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  <!-- your other form fields go here -->
  <button type="submit">Send</button>
</form>
                    `}
                  showLineNumbers
                />
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-submission"
              role="tabpanel"
              aria-labelledby="nav-submission-tab"
            >
              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control form-control-lg rounded-0"
                    placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-lg btn-light rounded-0">
                    {" "}
                    <FontAwesomeIcon icon={faSearch} className="me-2" /> Search
                  </button>
                </div>
              </div>
              <div className="row justify-content-between mt-3 align-items-center">
                <div className="col-4">
                  <button className="btn btn-lg btn-light">
                    {" "}
                    <FontAwesomeIcon icon={faSearch} className="me-2" /> Search
                  </button>
                </div>
                <div className="col-2">
                  <Link className="text-primary fw-bold">Settings</Link>
                </div>
              </div>
              <div
                className="container-fluid p-0 bg-light d-flex align-items-center justify-content-center mt-3"
                style={{
                  height: "200px",
                }}
              >
                <h6 className="h6">You haven't submitted this form yet.</h6>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-settings"
              role="tabpanel"
              aria-labelledby="nav-settings-tab"
            >
              <p>
                <strong>
                  This is some placeholder content the Contact tab's associated
                  content.
                </strong>{" "}
                Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the
                content visibility and styling. You can use it with tabs, pills,
                and any other <code>.nav</code>-powered navigation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
