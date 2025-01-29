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
import Header from "./Header";

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="container-fluid p-0 bg-light">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9 side-nav">
              <div className="w-100 p-3">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
