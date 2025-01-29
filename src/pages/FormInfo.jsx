import { faCopy, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
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
              <div class="bd-example">
                <nav>
                  <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-html-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-html"
                      type="button"
                      role="tab"
                      aria-controls="nav-html"
                      aria-selected="true"
                    >
                      HTML
                    </button>
                    <button
                      class="nav-link"
                      id="nav-js-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-js"
                      type="button"
                      role="tab"
                      aria-controls="nav-js"
                      aria-selected="false"
                    >
                      JavaScript
                    </button>
                    <button
                      class="nav-link"
                      id="nav-ajax-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-ajax"
                      type="button"
                      role="tab"
                      aria-controls="nav-ajax"
                      aria-selected="false"
                    >
                      Ajax
                    </button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div
                    class="tab-pane fade active show"
                    id="nav-html"
                    role="tabpanel"
                    aria-labelledby="nav-html-tab"
                  >
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
                    id="nav-ajax"
                    role="tabpanel"
                    aria-labelledby="nav-ajax-tab"
                  >
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
                    id="nav-js"
                    role="tabpanel"
                    aria-labelledby="nav-js-tab"
                  >
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
                </div>
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
              <div className="container">
                <p className="text-[15px] font-[700] text-[#808080] capitalize">
                  general
                </p>

                <div className="w-full mt-[33px]">
                  <h6 className="h6">Form name</h6>
                  <div className="row">
                    <div className="col-10">
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-0"
                        placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      />
                    </div>
                    <div className="col-2">
                      <button className="btn btn-lg btn-outline-secondary rounded-0">
                        Save
                      </button>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#808080] mt-[10px] font-[500]">
                    The form name won't be shown to visitors
                  </p>
                </div>
                <div className="w-full mt-[33px]">
                  <h6 className="h6">Form Enable</h6>
                  <div className="row">
                    <div className="col-10">
                      <p className="text-[15px] text-[#808080] mt-[10px] font-[500]">
                        Choose whether to allow new submissions
                      </p>
                    </div>
                    <div className="col-2 text-end">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input checked:bg-black checked:border-black checked:outline-black"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[15px] font-[700] text-[#808080] capitalize  mt-[33px]">
                  general
                </p>
                <div className="w-full mt-[33px]">
                  <h6 className="h6">Email Notification</h6>
                  <div className="row">
                    <div className="col-10">
                      <p className="text-[15px] text-[#808080] mt-[10px] font-[500]">
                        Send email notification
                      </p>
                    </div>
                    <div className="col-2 text-end">
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input checked:bg-black checked:border-black checked:outline-black"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-[33px]">
                  <h6 className="h6">Target Email</h6>
                  <div className="row">
                    <div className="col-10">
                      <select
                        type="text"
                        className="form-control form-control-lg rounded-0"
                        placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      >
                        <option>testuser@gmail.com</option>
                      </select>
                    </div>
                    <div className="col-2">
                      <button className="btn btn-lg btn-outline-secondary rounded-0">
                        Save
                      </button>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#808080] mt-[10px] font-[500]">
                    Where to send submissions. To add a new email address, visit
                    the{" "}
                    <Link
                      href=""
                      className="text-primary fw-bold text-decoration-none"
                    >
                      {" "}
                      account page
                    </Link>{" "}
                  </p>
                </div>
                <div className="w-full mt-[33px]">
                  <h6 className="h6">Target Email</h6>
                  <div className="row">
                    <div className="col-10">
                      <input
                        type="text"
                        className="form-control form-control-lg rounded-0"
                        placeholder="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
                      />
                    </div>
                    <div className="col-2">
                      <button className="btn btn-lg btn-outline-secondary rounded-0">
                        Save
                      </button>
                    </div>
                  </div>
                  <p className="text-[15px] text-[#808080] mt-[10px] font-[500]">
                    After successful submit, redirect to this URL. The URL can
                    be absolute, like "https://yoursite.com/thanks", or
                    relative, like "thanks"
                  </p>
                </div>
                <div className="w-full mt-[33px]">
                  <h6 className="h6">Delete Form</h6>
                  <div className="row">
                    <div className="col-10">
                      <p className="text-[15px] text-[#808080] mt-[10px] font-[500]">
                        Deleting the form will erase all traces of this form,
                        including all submissions and file uploads.
                      </p>
                    </div>
                    <div className="col-2 text-end">
                      <div class="form-check form-switch">
                        <button
                          className="rounded-0 border-none bg-transparent text-buttonColor"
                          title="Delete"
                        >
                          <FontAwesomeIcon icon={faTrash} size={21} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
