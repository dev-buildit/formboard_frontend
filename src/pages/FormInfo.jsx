import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function FormInfo() {
  return (
    <>
      <div className="container-fluid bg-white p-3 mt-3">
        <h5>Form name</h5>

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
              <h6>FORM ENDPOINT</h6>

              <div className="row">
                <div className="col-10">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                  />
                </div>
                <div className="col-2">
                  <button className="btn btn-outline-primary">
                    {" "}
                    <FontAwesomeIcon icon={faCopy} className="me-2" /> Copy
                  </button>
                </div>
              </div>
              <p className="mt-2 mb-4">
                Place this URL in the form's action attribute, set the method to
                POST, and add a name attribute to each input.
              </p>
              <h6>CODE EXAMPLE</h6>
            </div>
            <div
              class="tab-pane fade"
              id="nav-submission"
              role="tabpanel"
              aria-labelledby="nav-submission-tab"
            >
              <p>
                <strong>
                  This is some placeholder content the Profile tab's associated
                  content.
                </strong>{" "}
                Clicking another tab will toggle the visibility of this one for
                the next. The tab JavaScript swaps classes to control the
                content visibility and styling. You can use it with tabs, pills,
                and any other <code>.nav</code>-powered navigation.
              </p>
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
