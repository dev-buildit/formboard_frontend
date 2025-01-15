import {
  faBell,
  faClose,
  faNavicon,
  faPlus,
  faSignOut,
  faUserGear,
  faUsersGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import darkLogo from "../assets/logo-full-1.png";
import Sidebar from "./Sidebar";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <header>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light bg-white px-4 border-bottom shadow-sm"
          aria-label="Main navigation"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={darkLogo} alt="Formboard Logo" width={145} />
            </a>
            <button
              className="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <FontAwesomeIcon
                icon={navOpen ? faClose : faNavicon}
                className="p-2"
              />
            </button>

            <div
              className={`navbar-collapse bg-white offcanvas-collapse ${
                navOpen && "open"
              }`}
              id="navbarsExampleDefault"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item dropdown border rounded-1">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="dropdown01"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Team 1
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown01">
                    <li>
                      <a className="dropdown-item" href="#">
                        Team 1{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faPlus} className="me-2" /> Add
                        Team
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div
                className={`d-flex ${
                  navOpen && "flex-column justify-content-start"
                } ${!navOpen && "align-items-center"}`}
              >
                <Link
                  className={`text-decoration-none text-primary me-3 fw-bold ${
                    navOpen && "my-2"
                  }`}
                >
                  <FontAwesomeIcon icon={faBell} />{" "}
                  <span className="ms-2 text-secondary fw-normal">
                    Notifications
                  </span>
                </Link>
                <Link
                  className={`text-decoration-none text-primary me-3 fw-bold ${
                    navOpen && "my-2"
                  }`}
                >
                  <FontAwesomeIcon icon={faUserGear} />{" "}
                  <span className="ms-2 text-secondary fw-normal">Account</span>
                </Link>
                <button className="btn btn-secondary" title="Signout">
                  <FontAwesomeIcon icon={faSignOut} />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main className="container-fluid p-0 bg-light">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9 side-nav">
              <div className="overflow-y-scroll w-100 p-3">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
